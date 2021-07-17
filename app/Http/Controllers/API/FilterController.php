<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Author;
use App\Models\Category;
use Illuminate\Http\Request;

class FilterController extends Controller
{
    public function __construct(Category $categoryModel, Author $authorModel)
    {
        $this->categoryModel = $categoryModel;
        $this->authorModel = $authorModel;
    }

    public function getFilters()
    {
        $authors = $this->authorModel->get(['id', 'author_name'])->map(function ($author) {
            $obj = new \stdClass();
            $obj->id = $author->id;
            $obj->name = $author->author_name;
            return $obj;
        });

        $categories = $this->categoryModel->get(['id', 'category_name'])->map(function ($category){
            $obj = new \stdClass();
            $obj->id = $category->id;
            $obj->name = $category->category_name;
            return $obj;
        });

        return [
            'authors' => $authors,
            'categories' => $categories
        ];
    }
}
