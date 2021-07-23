<?php

use App\Http\Controllers\API\BookController;
use App\Http\Controllers\API\HomepageController;
use App\Http\Controllers\API\ReviewController;
use App\Http\Controllers\API\ShopController;
use App\Http\Controllers\OrderController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('homepage', [HomepageController::class, 'index']);
Route::get('shop', [ShopController::class, 'getProducts']);
Route::get('shop/filters', [ShopController::class, 'getAllFilters']);
Route::get('books/{book}/reviews/filters', [ReviewController::class, 'getAllFilters']);

Route::apiResource('books', BookController::class)->only('show');
Route::apiResource('books.reviews', ReviewController::class)->shallow()->only('index', 'store');
Route::apiResource('orders', OrderController::class)->only('store');
