<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Discount extends Model
{
    use HasFactory;

    public $timestamps = false;

    public function book()
    {
        return $this->belongsTo(Book::class);
    }

    public function scopeAvailable($query)
    {
        return $query->whereDate('discount_start_date', '<', now())
        ->where(function ($query) {
            $query->whereDate('discount_end_date', '>', now())
                ->orWhereNull('discount_end_date');
        });
    }
}
