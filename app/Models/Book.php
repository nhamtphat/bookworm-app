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

    public function scopeSelectAvgStar($query)
    {
        return $query->addSelect([
            'avg_star' => Review::select(DB::raw('sum(cast(rating_start as integer)) / count(*)'))
                ->whereColumn('book_id', 'books.id')
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
                    $join->on('sub_books.id', '=', 'discounts.book_id')
                        ->whereDate('discount_start_date', '<', now())
                        ->where(function ($query) {
                            $query->whereDate('discount_end_date', '>', now())
                                ->orWhereNull('discount_end_date');
                        });
                })
                ->limit(1)
        ]);
    }

    public function scopeSelectSubPrice($query)
    {
        return $query
            ->addSelect([
                'sub_price' => DB::table('books as sub_books')->selectRaw('COALESCE(books.book_price - discounts.discount_price, 0)')
                    ->whereColumn('books.id', '=', 'sub_books.id')
                    ->leftJoin('discounts', function ($join) {
                        $join->on('sub_books.id', '=', 'discounts.book_id')
                            ->whereDate('discount_start_date', '<', now())
                            ->where(function ($query) {
                                $query->whereDate('discount_end_date', '>', now())
                                    ->orWhereNull('discount_end_date');
                            });
                    })
                    ->limit(1)
            ]);
    }
}