<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () { return view('web.homepage.index'); })->name('web.homepage.index');
Route::get('/cart', function () { return view('web.cart.index'); })->name('web.cart.index');
Route::get('/shop', function () { return view('web.shop.index'); })->name('web.shop.index');
Route::get('/shop-list', function () { return view('web.shop.list'); })->name('web.shop.list');
Route::get('/products', function () { return view('web.products.index'); })->name('web.products.index');
Route::get('/about', function () { return view('web.about.index'); })->name('web.about.index');
