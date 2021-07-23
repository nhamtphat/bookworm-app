<?php


namespace App\Supports;


use App\Models\Author;
use App\Models\Category;

class ShopFilter
{
    public function __construct($title, $query_key, $data)
    {
        $this->title = $title;
        $this->query_key = $query_key;
        $this->data = $data;
    }

    public static function getFiltersByAuthor()
    {
        $authors = Author::orderBy('author_name')->get(['id', 'author_name'])->map(function ($author) {
            return new ShopFilterData($author->author_name, $author->id);
        });

        return new ShopFilter("Author", "author_id", $authors);
    }

    public static function getFiltersByCategory()
    {
        $categories = Category::orderBy('category_name')->get(['id', 'category_name'])->map(function ($category) {
            return new ShopFilterData($category->category_name, $category->id);
        });
        return new ShopFilter("Category", "category_id", $categories);
    }

    public static function getFiltersByStar()
    {
        $ratings = collect([1, 2, 3, 4, 5])->map(function ($star) {
            return new ShopFilterData("$star star", $star);
        });
        return new ShopFilter("Rating", "star", $ratings);
    }
}