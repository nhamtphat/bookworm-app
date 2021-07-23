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
        $onsale_books = BookResource::collection(
            $this->bookModel
                ->with('author', 'category', 'availableDiscounts', 'reviews')
                ->selectSubPrice()
                ->orderByDesc('sub_price')
                ->limit(10)
                ->get()
        );

        $recommended_books = BookResource::collection(
            $this->bookModel
                ->with('author', 'category', 'availableDiscounts', 'reviews')
                ->selectAvgStar()
                ->selectFinalPrice()
                ->orderByDesc('avg_star')
                ->orderBy('final_price')
                ->limit(8)
                ->get()
        );

        $popular_books = BookResource::collection(
            $this->bookModel
                ->with('author', 'category', 'availableDiscounts', 'reviews')
                ->withCount('reviews')
                ->selectFinalPrice()
                ->orderByDesc('reviews_count')
                ->orderBy('final_price')
                ->limit(8)
                ->get()
        );

        return compact('onsale_books', 'recommended_books', 'popular_books');
    }
}
