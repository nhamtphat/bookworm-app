<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Book extends Model
{
    use HasFactory;

    public $timestamps = false;

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function author()
    {
        return $this->belongsTo(Author::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function discounts()
    {
        return $this->hasMany(Discount::class)->latest('discount_start_date');
    }

    public function availableDiscounts()
    {
        return $this->hasMany(Discount::class)->available()->latest('discount_start_date');
    }

    public function getFinalPriceAttribute()
    {
        return $this->final_price ?? $this->discount_price ?? $this->availableDiscounts->first()->discount_price ?? $this->book_price;
    }

    public function getAvgStarAttribute()
    {
        $avg = ($this->avg_star ?? $this->reviews->avg('rating_start'));
        return round($avg, 2);
    }

    public function scopeSelectAvgStar($query)
    {
        return $query->addSelect([
            'avg_star' => DB::table('books as sub_books')->selectRaw('COALESCE(avg(cast(rating_start as integer)), 0)')
                ->whereColumn('books.id', '=', 'sub_books.id')
                ->leftJoin('reviews', function ($join) {
                    $join->on('sub_books.id', '=', 'reviews.book_id');
                })
                ->limit(1)
        ]);
    }

    public function scopeSelectDiscountPrice($query)
    {
        return $query->addSelect([
            'discount_price' => Discount::select('discount_price')
                ->available()
                ->whereColumn('book_id', 'books.id')
                ->limit(1),
        ]);
    }

    public function scopeSelectFinalPrice($query)
    {
        return $query->addSelect([
            'final_price' => DB::table('books as sub_books')->selectRaw('COALESCE(discounts.discount_price, books.book_price)')
                ->whereColumn('books.id', '=', 'sub_books.id')
                ->leftJoin('discounts', function ($join) {
                    (new Discount)->scopeAvailable($join->on('sub_books.id', '=', 'discounts.book_id'));
                })
                ->limit(1)
        ]);
    }

    public function scopeSelectSubPrice($query)
    {
        return $query->addSelect([
            'sub_price' => DB::table('books as sub_books')->selectRaw('COALESCE(books.book_price - discounts.discount_price, 0)')
                ->whereColumn('books.id', '=', 'sub_books.id')
                ->leftJoin('discounts', function ($join) {
                    (new Discount)->scopeAvailable($join->on('sub_books.id', '=', 'discounts.book_id'));
                })
                ->limit(1)
        ]);
    }
}