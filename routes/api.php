<?php

use App\Http\Controllers\API\BookController;
use App\Http\Controllers\API\HomepageController;
use App\Http\Controllers\API\ShopController;
use Illuminate\Http\Request;
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
Route::get('shop', [ShopController::class, 'index']);
Route::apiResource('books', BookController::class)->only('show');
