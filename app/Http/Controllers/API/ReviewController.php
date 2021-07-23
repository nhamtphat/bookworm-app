<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\ReviewResource;
use App\Models\Book;
use App\Models\Review;
use App\Supports\ReviewFilter;
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

        if ($request->has('filter_value') && $request->get('filter_value') != '') {
            $query = $query->where('rating_start', $request->get('filter_value'));
        }

        $sort_scope = ($request->get('sort_by') == 'newest_first') ? 'latest' : 'oldest';
        $query = $query->{$sort_scope}('review_date');

        return ReviewResource::collection($query->paginate($per_page));
    }

    public function getAllFilters(Book $book)
    {
        $rating_filter = ReviewFilter::getFiltersOfBook($book);

        return [$rating_filter];
    }

    public function store(Request $request, Book $book)
    {
        $validation = Validator::make($request->all(), [
            'review_title'   => 'required|string|max:120',
            'review_details' => 'nullable|string',
            'rating_start'   => [
                'required',
                Rule::in([1, 2, 3, 4, 5]),
            ],
        ]);

        if ($validation->fails()) {
            return response($validation->getMessageBag(), 400);
        }

        $review = $book->reviews()->create($request->all());

        return response($review, 201);
    }
}
