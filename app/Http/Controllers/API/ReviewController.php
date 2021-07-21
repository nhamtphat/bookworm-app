<?php

namespace App\Http\Controllers\API;

use App\Helpers\ShopFilter;
use App\Helpers\ShopFilterData;
use App\Http\Controllers\Controller;
use App\Http\Resources\ReviewResource;
use App\Models\Book;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class ReviewController extends Controller
{
    public function __construct(Book $bookModel, Review $reviewModel)
    {
        $this->bookModel = $bookModel;
        $this->reviewModel = $reviewModel;
    }

    public function index(Request $request, Book $book)
    {
        $per_page = $request->per_page ?? 20;

        $query = $book->reviews();

        if($request->has('filter_value') && $request->get('filter_value') != "") {
            $query = $query->where('rating_start', $request->get('filter_value'));
        }

        if($request->get('sort_by') == 'newest_first') {
            $query = $query->latest('review_date');
        } else {
            $query = $query->oldest('review_date');
        }

        return ReviewResource::collection($query->paginate($per_page));
    }

    public function getAllFilters(Book $book)//: array
    {
        $reviews_count = $book->reviews()->selectRaw('rating_start, count(*)')->groupBy('rating_start')->get();

        $ratings = collect([1, 2, 3, 4, 5])->map(function ($star) use ($reviews_count) {
            $count = $reviews_count->firstWhere('rating_start', $star)->count ?? 0;
            return new ShopFilterData("$star star ($count)", $star);
        });
        $rating_filter = new ShopFilter("Rating", "star", $ratings);

        return [$rating_filter];

    }

    public function store(Request $request, Book $book)
    {
        $validation = Validator::make($request->all(), [
            'review_title' => 'required|string|max:120',
            'review_details' => 'nullable|string',
            'rating_start' => [
                'required',
                Rule::in([1,2,3,4,5])
            ]
        ]);

        if($validation->fails()){
            return response($validation->getMessageBag(), 400);
        }

        $review = $book->reviews()->create($request->all());

        return response($review, 201);
    }
}
