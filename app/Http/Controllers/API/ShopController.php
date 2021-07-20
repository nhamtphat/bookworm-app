<?php

namespace App\Http\Controllers\API;

use App\Helpers\ShopFilter;
use App\Helpers\ShopFilterData;
use App\Http\Controllers\Controller;
use App\Http\Resources\BookResource;
use App\Models\Author;
use App\Models\Book;
use App\Models\Category;
use Illuminate\Http\Request;

class ShopController extends Controller
{
    public function __construct(Author $authorModel, Book $bookModel, Category $categoryModel)
    {
        $this->authorModel = $authorModel;
        $this->bookModel = $bookModel;
        $this->categoryModel = $categoryModel;
    }

    public function getProducts(Request $request)
    {
        $per_page = $request->per_page ?? 20;

        $query = $this->bookModel->with('author', 'category', 'availableDiscounts', 'reviews')->selectFinalPrice();


        if ($request->get('filter_by') != "" && $request->get('filter_value') != "") {
            if($request->get('filter_by') == 'star') {
                $star = $request->get('filter_value');
                $book_query = Book::select('books.id')
                    ->join('reviews', 'books.id', '=', 'reviews.book_id')
                    ->groupBy('books.id')
                    ->havingRaw('round(AVG(cast(rating_start as integer))) >= ?', [$star]);
                $query = $query->whereIn('id', $book_query);
            } else {
                $filter_by = $request->get('filter_by');
                $filter_value = $request->get('filter_value');
                $query = $query->where($filter_by, $filter_value);
            }
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

    public function getAllFilters(): array
    {
        $authors = $this->authorModel->orderBy('author_name')->get(['id', 'author_name'])->map(function ($author) {
            return new ShopFilterData($author->author_name, $author->id);
        });
        $author_filter = new ShopFilter("Author", "author_id", $authors);

        $categories = $this->categoryModel->orderBy('category_name')->get(['id', 'category_name'])->map(function ($category) {
            return new ShopFilterData($category->category_name, $category->id);
        });
        $category_filter = new ShopFilter("Category", "category_id", $categories);

        $ratings = collect([1, 2, 3, 4, 5])->map(function ($star) {
            return new ShopFilterData("$star star", $star);
        });
        $rating_filter = new ShopFilter("Rating", "star", $ratings);

        return [
            $category_filter,
            $author_filter,
            $rating_filter
        ];
    }
}
