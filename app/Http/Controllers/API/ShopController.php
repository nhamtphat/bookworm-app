<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\BookResource;
use App\Models\Book;
use Illuminate\Http\Request;
use App\Http\Resources\BookCollection;

class ShopController extends Controller
{
    public function __construct(Book $bookModel)
    {
        $this->bookModel = $bookModel;
    }

    public function index(Request $request)
    {
        $per_page = $request->per_page ?? 20;
        
        return BookResource::collection($this->bookModel->paginate($per_page));
    }
}
