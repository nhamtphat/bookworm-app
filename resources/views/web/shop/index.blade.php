@extends('web.shop.layout')

@push('head')

@endpush

@section('content')
    <div class="col-md-3">
        <figure class="card card-product-grid">
            <div class="img-wrap">
                <span class="topbar">
                    <span class="badge badge-success"> NEW </span>
                </span>
                <img src="{{asset('ecommerce/images/items/7.jpg')}}">
            </div>
            <figcaption class="info-wrap border-top">
                <a href="#" class="title">H&M Polo Shirt Slim Fit</a>
                <div class="price-wrap mt-2">
                    <span class="price">$12.99</span>
                    <del class="price-old">$14.99</del>
                </div> <!-- price-wrap.// -->
            </figcaption>
        </figure> <!-- card // -->
    </div> <!-- col.// -->
    <div class="col-md-3">
        <figure class="card card-product-grid">
            <div class="img-wrap">
                <span class="topbar">
                    <span class="badge badge-success"> NEW </span>
                </span>
                <img src="{{asset('ecommerce/images/items/7.jpg')}}">
            </div>
            <figcaption class="info-wrap border-top">
                <a href="#" class="title">H&M Polo Shirt Slim Fit</a>
                <div class="price-wrap mt-2">
                    <span class="price">$12.99</span>
                    <del class="price-old">$14.99</del>
                </div> <!-- price-wrap.// -->
            </figcaption>
        </figure> <!-- card // -->
    </div> <!-- col.// -->
@endsection

@push('footer')

@endpush