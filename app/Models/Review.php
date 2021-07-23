<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    const CREATED_AT = 'review_date';
    const UPDATED_AT = 'review_date';

    protected $fillable = ['review_title', 'review_details', 'rating_start', 'book_id'];
}
