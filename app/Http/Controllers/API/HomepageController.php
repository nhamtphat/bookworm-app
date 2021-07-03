<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\BookResource;
use App\Models\Book;
use Illuminate\Support\Facades\DB;

class HomepageController extends Controller
{
    public function __construct(Book $bookModel)
    {
        $this->bookModel = $bookModel;
    }

    public function index()
    {
        // Recommended books
        DB::enableQueryLog();

        return $recommended_books = BookResource::collection(
            $this->bookModel
                ->has('reviews')
                ->selectAvgStar()
                ->selectDiscountPrice()
                ->orderByDesc('avg_star')
                ->orderBy('discount_price')
                ->limit(8)
                ->get()
                ->sortBy([
                    ['avg_star', 'desc'],
                    ['final_price', 'asc']
                ])
        );


        dd(DB::getQueryLog());
    }
}


