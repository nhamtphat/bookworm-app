@extends('web.shop.layout')

@section('content')
    <div class="col-12">
        <article class="card card-product-list">
            <div class="row no-gutters">
                <aside class="col-md-3">
                    <a href="#" class="img-wrap">
                        <span class="badge badge-danger"> NEW </span>
                        <img src="{{ asset('ecommerce/images/items/8.jpg')}}">
                    </a>
                </aside> <!-- col.// -->
                <div class="col-md-6">
                    <div class="info-main">
                        <a href="#" class="h5 title"> Apple air pods 2 </a>
                        <div class="rating-wrap mb-3">
                            <ul class="rating-stars">
                                <li style="width:80%" class="stars-active">
                                    <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </li>
                                <li>
                                    <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </li>
                            </ul>
                            <div class="label-rating">7/10</div>
                        </div> <!-- rating-wrap.// -->

                        <p> Take it as demo specs, ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim veniam </p>
                    </div> <!-- info-main.// -->
                </div> <!-- col.// -->
                <aside class="col-sm-3">
                    <div class="info-aside">
                        <div class="price-wrap">
                            <span class="price h5"> $140 </span>
                            <del class="price-old"> $198</del>
                        </div> <!-- info-price-detail // -->
                        <p class="text-success">Free shipping</p>
                        <br>
                        <p>
                            <a href="#" class="btn btn-primary btn-block"> Details </a>
                            <a href="#" class="btn btn-light btn-block"><i class="fa fa-heart"></i>
                                <span class="text">Add to wishlist</span>
                            </a>
                        </p>
                    </div> <!-- info-aside.// -->
                </aside> <!-- col.// -->
            </div> <!-- row.// -->
        </article>
    </div>
    <div class="col-12">
        <article class="card card-product-list">
            <div class="row no-gutters">
                <aside class="col-md-3">
                    <a href="#" class="img-wrap">
                        <span class="badge badge-danger"> NEW </span>
                        <img src="{{ asset('ecommerce/images/items/8.jpg')}}">
                    </a>
                </aside> <!-- col.// -->
                <div class="col-md-6">
                    <div class="info-main">
                        <a href="#" class="h5 title"> Apple air pods 2 </a>
                        <div class="rating-wrap mb-3">
                            <ul class="rating-stars">
                                <li style="width:80%" class="stars-active">
                                    <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </li>
                                <li>
                                    <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </li>
                            </ul>
                            <div class="label-rating">7/10</div>
                        </div> <!-- rating-wrap.// -->

                        <p> Take it as demo specs, ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim veniam </p>
                    </div> <!-- info-main.// -->
                </div> <!-- col.// -->
                <aside class="col-sm-3">
                    <div class="info-aside">
                        <div class="price-wrap">
                            <span class="price h5"> $140 </span>
                            <del class="price-old"> $198</del>
                        </div> <!-- info-price-detail // -->
                        <p class="text-success">Free shipping</p>
                        <br>
                        <p>
                            <a href="#" class="btn btn-primary btn-block"> Details </a>
                            <a href="#" class="btn btn-light btn-block"><i class="fa fa-heart"></i>
                                <span class="text">Add to wishlist</span>
                            </a>
                        </p>
                    </div> <!-- info-aside.// -->
                </aside> <!-- col.// -->
            </div> <!-- row.// -->
        </article>
    </div>
@endsection