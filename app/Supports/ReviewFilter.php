<?php


namespace App\Supports;


use App\Models\Book;
use App\Models\Review;

class ReviewFilter extends ShopFilter
{
    public static function getFiltersOfBook(Book $book)
    {
        if(isset($book)) {
            $reviews_count = $book->reviews()->selectRaw('rating_start, count(*)')->groupBy('rating_start')->get();
        } else {
            $reviews_count = Review::selectRaw('rating_start, count(*)')->groupBy('rating_start')->get();
        }

        $ratings = collect([1, 2, 3, 4, 5])->map(function ($star) use ($reviews_count) {
            $count = $reviews_count->firstWhere('rating_start', $star)->count ?? 0;
            return new ShopFilterData("$star star ($count)", $star);
        });

        return new ShopFilter("Rating", "star", $ratings);
    }
}