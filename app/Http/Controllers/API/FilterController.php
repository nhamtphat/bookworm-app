<?php

namespace App\Http\Controllers\API;

use App\Helpers\ShopFilter;
use App\Helpers\ShopFilterData;
use App\Http\Controllers\Controller;
use App\Models\Author;
use App\Models\Category;

class FilterController extends Controller
{
    public function __construct(Category $categoryModel, Author $authorModel)
    {
        $this->categoryModel = $categoryModel;
        $this->authorModel = $authorModel;
    }

    public function getFilters(): array
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
