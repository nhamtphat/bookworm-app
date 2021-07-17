<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\BookResource;
use App\Models\Book;
use App\Models\Discount;
use DB;
use Illuminate\Http\Request;
use App\Http\Resources\BookCollection;

class ShopController extends Controller
{
    public function __construct(Book $bookModel)
    {
        $this->bookModel = $bookModel;
    }

    public function getProducts(Request $request)
    {
        $per_page = $request->per_page ?? 20;

        $query = $this->bookModel->selectFinalPrice();

        if ($request->get('filter_by') != "" && $request->get('filter_id') != "") {
            $filter_by = $request->get('filter_by');
            $filter_id = $request->get('filter_id');
            $query = $query->where($filter_by, $filter_id);
        }

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

//        return $query->toSql();

        return BookResource::collection($query->paginate($per_page));
    }
}
