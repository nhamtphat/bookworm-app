<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\BookResource;
use App\Models\Book;
use Illuminate\Http\Request;
use App\Http\Resources\BookCollection;

class ShopController extends Controller
{
    public function __construct(Book $bookModel)
    {
        $this->bookModel = $bookModel;
    }

    public function index(Request $request)
    {
        $per_page = $request->per_page ?? 20;

        $query = $this->bookModel->selectFinalPrice();

        switch ($request->get('sort_by')) {
            case "popularity":
                $query = $query
                    ->withCount('reviews')
                    ->orderByDesc('reviews_count')
                    ->orderBy('final_price');
                break;

            case "asc_price":
                $query = $query->orderBy('final_price');
                break;

            case "desc_price":
                $query = $query->orderByDesc('final_price');
                break;

            default:
                $query = $query
                    ->selectSubPrice()
                    ->orderByDesc('sub_price')
                    ->orderBy('final_price');
        }

        return BookResource::collection($query->paginate($per_page));
    }
}
