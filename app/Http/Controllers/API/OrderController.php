<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function __construct(Book $bookModel, Order $orderModel)
    {
        $this->bookModel = $bookModel;
        $this->orderModel = $orderModel;
    }

    public function store(Request $request)
    {
        $books_id = $request->input('cart.*.product.id');
        $books_quantity = $request->input('cart.*.quantity');
        $books = $this->bookModel->with('availableDiscounts')->whereIn('id', $books_id)->get();

        if (count($books) < count($books_id)) {
            $unavailable_products_id = collect($books_id)->diff($books->pluck('id'));

            return response([
                'error'                => 'Unavailable products',
                'unavailable_products' => $unavailable_products_id,
            ], 400);
        }

        $order = DB::transaction(function () use ($books, $books_quantity) {
            $order = $this->orderModel->create([
                'order_date'   => now(),
                'order_amount' => 0,
            ]);

            $order_items = [];
            $order_amount = 0;
            for ($i = 0; $i < count($books); $i++) {
                $order_items[] = [
                    'book_id'  => $books[$i]->id,
                    'price'    => $books[$i]->final_price,
                    'quantity' => $books_quantity[$i],
                ];
                $order_amount += ($books[$i]->final_price * $books_quantity[$i]);
            }

            $order->items()->createMany($order_items);
            $order->update(['order_amount' => $order_amount]);

            return $order;
        });

        return response($order, 201);
    }
}
