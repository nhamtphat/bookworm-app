@extends('web.layout')

@push('head')

    <!-- plugin: slickslider -->
    <link href="{{ asset('ecommerce/plugins/slickslider/slick.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('ecommerce/plugins/slickslider/slick-theme.css')}}" rel="stylesheet" type="text/css" />
    <script src="{{ asset('ecommerce/plugins/slickslider/slick.min.js')}}"></script>

@endpush

@section('main')
    <section class="section-content bg padding-y">
        <div class="container">
            <h4>Slick slider items</h4>
            <div class="slider-items-slick row" data-slick='{"slidesToShow": 4, "slidesToScroll": 1}'>
                <div class="item-slide p-2">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                            <span class="topbar">
                                <span class="badge badge-success"> NEW </span>
                            </span>
                            <img src="{{ asset('ecommerce/images/items/7.jpg')}}">
                        </div>
                        <figcaption class="info-wrap border-top">
                            <a href="#" class="title">H&M Polo Shirt Slim Fit</a>
                            <div class="price-wrap mt-2">
                                <span class="price">$12.99</span>
                                <del class="price-old">$14.99</del>
                            </div> <!-- price-wrap.// -->
                        </figcaption>
                    </figure> <!-- card // -->
                </div>
                <div class="item-slide p-2">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                            <span class="topbar">
                                <span class="badge badge-success"> NEW </span>
                            </span>
                            <img src="{{ asset('ecommerce/images/items/7.jpg')}}">
                        </div>
                        <figcaption class="info-wrap border-top">
                            <a href="#" class="title">H&M Polo Shirt Slim Fit</a>
                            <div class="price-wrap mt-2">
                                <span class="price">$12.99</span>
                                <del class="price-old">$14.99</del>
                            </div> <!-- price-wrap.// -->
                        </figcaption>
                    </figure> <!-- card // -->
                </div>
                <div class="item-slide p-2">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                            <span class="topbar">
                                <span class="badge badge-success"> NEW </span>
                            </span>
                            <img src="{{ asset('ecommerce/images/items/7.jpg')}}">
                        </div>
                        <figcaption class="info-wrap border-top">
                            <a href="#" class="title">H&M Polo Shirt Slim Fit</a>
                            <div class="price-wrap mt-2">
                                <span class="price">$12.99</span>
                                <del class="price-old">$14.99</del>
                            </div> <!-- price-wrap.// -->
                        </figcaption>
                    </figure> <!-- card // -->
                </div>
                <div class="item-slide p-2">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                            <span class="topbar">
                                <span class="badge badge-success"> NEW </span>
                            </span>
                            <img src="{{ asset('ecommerce/images/items/7.jpg')}}">
                        </div>
                        <figcaption class="info-wrap border-top">
                            <a href="#" class="title">H&M Polo Shirt Slim Fit</a>
                            <div class="price-wrap mt-2">
                                <span class="price">$12.99</span>
                                <del class="price-old">$14.99</del>
                            </div> <!-- price-wrap.// -->
                        </figcaption>
                    </figure> <!-- card // -->
                </div>
                <div class="item-slide p-2">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                            <span class="topbar">
                                <span class="badge badge-success"> NEW </span>
                            </span>
                            <img src="{{ asset('ecommerce/images/items/7.jpg')}}">
                        </div>
                        <figcaption class="info-wrap border-top">
                            <a href="#" class="title">H&M Polo Shirt Slim Fit</a>
                            <div class="price-wrap mt-2">
                                <span class="price">$12.99</span>
                                <del class="price-old">$14.99</del>
                            </div> <!-- price-wrap.// -->
                        </figcaption>
                    </figure> <!-- card // -->
                </div>
                <div class="item-slide p-2">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                            <span class="topbar">
                                <span class="badge badge-success"> NEW </span>
                            </span>
                            <img src="{{ asset('ecommerce/images/items/7.jpg')}}">
                        </div>
                        <figcaption class="info-wrap border-top">
                            <a href="#" class="title">H&M Polo Shirt Slim Fit</a>
                            <div class="price-wrap mt-2">
                                <span class="price">$12.99</span>
                                <del class="price-old">$14.99</del>
                            </div> <!-- price-wrap.// -->
                        </figcaption>
                    </figure> <!-- card // -->
                </div>
                <div class="item-slide p-2">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                            <span class="topbar">
                                <span class="badge badge-success"> NEW </span>
                            </span>
                            <img src="{{ asset('ecommerce/images/items/7.jpg')}}">
                        </div>
                        <figcaption class="info-wrap border-top">
                            <a href="#" class="title">H&M Polo Shirt Slim Fit</a>
                            <div class="price-wrap mt-2">
                                <span class="price">$12.99</span>
                                <del class="price-old">$14.99</del>
                            </div> <!-- price-wrap.// -->
                        </figcaption>
                    </figure> <!-- card // -->
                </div>
                <div class="item-slide p-2">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                            <span class="topbar">
                                <span class="badge badge-success"> NEW </span>
                            </span>
                            <img src="{{ asset('ecommerce/images/items/7.jpg')}}">
                        </div>
                        <figcaption class="info-wrap border-top">
                            <a href="#" class="title">H&M Polo Shirt Slim Fit</a>
                            <div class="price-wrap mt-2">
                                <span class="price">$12.99</span>
                                <del class="price-old">$14.99</del>
                            </div> <!-- price-wrap.// -->
                        </figcaption>
                    </figure> <!-- card // -->
                </div>
            </div>

            <br><br>

            <h4>Slick slider items</h4>
            <div class="row">
                <div class="col-md-3">
                    <div class="item-slide p-2">
                        <figure class="card card-product-grid">
                            <div class="img-wrap">
                            <span class="topbar">
                                <span class="badge badge-success"> NEW </span>
                            </span>
                                <img src="{{ asset('ecommerce/images/items/7.jpg')}}">
                            </div>
                            <figcaption class="info-wrap border-top">
                                <a href="#" class="title">H&M Polo Shirt Slim Fit</a>
                                <div class="price-wrap mt-2">
                                    <span class="price">$12.99</span>
                                    <del class="price-old">$14.99</del>
                                </div> <!-- price-wrap.// -->
                            </figcaption>
                        </figure> <!-- card // -->
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="item-slide p-2">
                        <figure class="card card-product-grid">
                            <div class="img-wrap">
                            <span class="topbar">
                                <span class="badge badge-success"> NEW </span>
                            </span>
                                <img src="{{ asset('ecommerce/images/items/7.jpg')}}">
                            </div>
                            <figcaption class="info-wrap border-top">
                                <a href="#" class="title">H&M Polo Shirt Slim Fit</a>
                                <div class="price-wrap mt-2">
                                    <span class="price">$12.99</span>
                                    <del class="price-old">$14.99</del>
                                </div> <!-- price-wrap.// -->
                            </figcaption>
                        </figure> <!-- card // -->
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="item-slide p-2">
                        <figure class="card card-product-grid">
                            <div class="img-wrap">
                            <span class="topbar">
                                <span class="badge badge-success"> NEW </span>
                            </span>
                                <img src="{{ asset('ecommerce/images/items/7.jpg')}}">
                            </div>
                            <figcaption class="info-wrap border-top">
                                <a href="#" class="title">H&M Polo Shirt Slim Fit</a>
                                <div class="price-wrap mt-2">
                                    <span class="price">$12.99</span>
                                    <del class="price-old">$14.99</del>
                                </div> <!-- price-wrap.// -->
                            </figcaption>
                        </figure> <!-- card // -->
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="item-slide p-2">
                        <figure class="card card-product-grid">
                            <div class="img-wrap">
                            <span class="topbar">
                                <span class="badge badge-success"> NEW </span>
                            </span>
                                <img src="{{ asset('ecommerce/images/items/7.jpg')}}">
                            </div>
                            <figcaption class="info-wrap border-top">
                                <a href="#" class="title">H&M Polo Shirt Slim Fit</a>
                                <div class="price-wrap mt-2">
                                    <span class="price">$12.99</span>
                                    <del class="price-old">$14.99</del>
                                </div> <!-- price-wrap.// -->
                            </figcaption>
                        </figure> <!-- card // -->
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="item-slide p-2">
                        <figure class="card card-product-grid">
                            <div class="img-wrap">
                            <span class="topbar">
                                <span class="badge badge-success"> NEW </span>
                            </span>
                                <img src="{{ asset('ecommerce/images/items/7.jpg')}}">
                            </div>
                            <figcaption class="info-wrap border-top">
                                <a href="#" class="title">H&M Polo Shirt Slim Fit</a>
                                <div class="price-wrap mt-2">
                                    <span class="price">$12.99</span>
                                    <del class="price-old">$14.99</del>
                                </div> <!-- price-wrap.// -->
                            </figcaption>
                        </figure> <!-- card // -->
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="item-slide p-2">
                        <figure class="card card-product-grid">
                            <div class="img-wrap">
                            <span class="topbar">
                                <span class="badge badge-success"> NEW </span>
                            </span>
                                <img src="{{ asset('ecommerce/images/items/7.jpg')}}">
                            </div>
                            <figcaption class="info-wrap border-top">
                                <a href="#" class="title">H&M Polo Shirt Slim Fit</a>
                                <div class="price-wrap mt-2">
                                    <span class="price">$12.99</span>
                                    <del class="price-old">$14.99</del>
                                </div> <!-- price-wrap.// -->
                            </figcaption>
                        </figure> <!-- card // -->
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="item-slide p-2">
                        <figure class="card card-product-grid">
                            <div class="img-wrap">
                            <span class="topbar">
                                <span class="badge badge-success"> NEW </span>
                            </span>
                                <img src="{{ asset('ecommerce/images/items/7.jpg')}}">
                            </div>
                            <figcaption class="info-wrap border-top">
                                <a href="#" class="title">H&M Polo Shirt Slim Fit</a>
                                <div class="price-wrap mt-2">
                                    <span class="price">$12.99</span>
                                    <del class="price-old">$14.99</del>
                                </div> <!-- price-wrap.// -->
                            </figcaption>
                        </figure> <!-- card // -->
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="item-slide p-2">
                        <figure class="card card-product-grid">
                            <div class="img-wrap">
                            <span class="topbar">
                                <span class="badge badge-success"> NEW </span>
                            </span>
                                <img src="{{ asset('ecommerce/images/items/7.jpg')}}">
                            </div>
                            <figcaption class="info-wrap border-top">
                                <a href="#" class="title">H&M Polo Shirt Slim Fit</a>
                                <div class="price-wrap mt-2">
                                    <span class="price">$12.99</span>
                                    <del class="price-old">$14.99</del>
                                </div> <!-- price-wrap.// -->
                            </figcaption>
                        </figure> <!-- card // -->
                    </div>
                </div>
            </div>

            <br><br>

            <h4>Slick slider items</h4>
            <div class="row">
                <div class="col-md-3">
                    <div class="item-slide p-2">
                        <figure class="card card-product-grid">
                            <div class="img-wrap">
                            <span class="topbar">
                                <span class="badge badge-success"> NEW </span>
                            </span>
                                <img src="{{ asset('ecommerce/images/items/7.jpg')}}">
                            </div>
                            <figcaption class="info-wrap border-top">
                                <a href="#" class="title">H&M Polo Shirt Slim Fit</a>
                                <div class="price-wrap mt-2">
                                    <span class="price">$12.99</span>
                                    <del class="price-old">$14.99</del>
                                </div> <!-- price-wrap.// -->
                            </figcaption>
                        </figure> <!-- card // -->
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="item-slide p-2">
                        <figure class="card card-product-grid">
                            <div class="img-wrap">
                            <span class="topbar">
                                <span class="badge badge-success"> NEW </span>
                            </span>
                                <img src="{{ asset('ecommerce/images/items/7.jpg')}}">
                            </div>
                            <figcaption class="info-wrap border-top">
                                <a href="#" class="title">H&M Polo Shirt Slim Fit</a>
                                <div class="price-wrap mt-2">
                                    <span class="price">$12.99</span>
                                    <del class="price-old">$14.99</del>
                                </div> <!-- price-wrap.// -->
                            </figcaption>
                        </figure> <!-- card // -->
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="item-slide p-2">
                        <figure class="card card-product-grid">
                            <div class="img-wrap">
                            <span class="topbar">
                                <span class="badge badge-success"> NEW </span>
                            </span>
                                <img src="{{ asset('ecommerce/images/items/7.jpg')}}">
                            </div>
                            <figcaption class="info-wrap border-top">
                                <a href="#" class="title">H&M Polo Shirt Slim Fit</a>
                                <div class="price-wrap mt-2">
                                    <span class="price">$12.99</span>
                                    <del class="price-old">$14.99</del>
                                </div> <!-- price-wrap.// -->
                            </figcaption>
                        </figure> <!-- card // -->
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="item-slide p-2">
                        <figure class="card card-product-grid">
                            <div class="img-wrap">
                            <span class="topbar">
                                <span class="badge badge-success"> NEW </span>
                            </span>
                                <img src="{{ asset('ecommerce/images/items/7.jpg')}}">
                            </div>
                            <figcaption class="info-wrap border-top">
                                <a href="#" class="title">H&M Polo Shirt Slim Fit</a>
                                <div class="price-wrap mt-2">
                                    <span class="price">$12.99</span>
                                    <del class="price-old">$14.99</del>
                                </div> <!-- price-wrap.// -->
                            </figcaption>
                        </figure> <!-- card // -->
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="item-slide p-2">
                        <figure class="card card-product-grid">
                            <div class="img-wrap">
                            <span class="topbar">
                                <span class="badge badge-success"> NEW </span>
                            </span>
                                <img src="{{ asset('ecommerce/images/items/7.jpg')}}">
                            </div>
                            <figcaption class="info-wrap border-top">
                                <a href="#" class="title">H&M Polo Shirt Slim Fit</a>
                                <div class="price-wrap mt-2">
                                    <span class="price">$12.99</span>
                                    <del class="price-old">$14.99</del>
                                </div> <!-- price-wrap.// -->
                            </figcaption>
                        </figure> <!-- card // -->
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="item-slide p-2">
                        <figure class="card card-product-grid">
                            <div class="img-wrap">
                            <span class="topbar">
                                <span class="badge badge-success"> NEW </span>
                            </span>
                                <img src="{{ asset('ecommerce/images/items/7.jpg')}}">
                            </div>
                            <figcaption class="info-wrap border-top">
                                <a href="#" class="title">H&M Polo Shirt Slim Fit</a>
                                <div class="price-wrap mt-2">
                                    <span class="price">$12.99</span>
                                    <del class="price-old">$14.99</del>
                                </div> <!-- price-wrap.// -->
                            </figcaption>
                        </figure> <!-- card // -->
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="item-slide p-2">
                        <figure class="card card-product-grid">
                            <div class="img-wrap">
                            <span class="topbar">
                                <span class="badge badge-success"> NEW </span>
                            </span>
                                <img src="{{ asset('ecommerce/images/items/7.jpg')}}">
                            </div>
                            <figcaption class="info-wrap border-top">
                                <a href="#" class="title">H&M Polo Shirt Slim Fit</a>
                                <div class="price-wrap mt-2">
                                    <span class="price">$12.99</span>
                                    <del class="price-old">$14.99</del>
                                </div> <!-- price-wrap.// -->
                            </figcaption>
                        </figure> <!-- card // -->
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="item-slide p-2">
                        <figure class="card card-product-grid">
                            <div class="img-wrap">
                            <span class="topbar">
                                <span class="badge badge-success"> NEW </span>
                            </span>
                                <img src="{{ asset('ecommerce/images/items/7.jpg')}}">
                            </div>
                            <figcaption class="info-wrap border-top">
                                <a href="#" class="title">H&M Polo Shirt Slim Fit</a>
                                <div class="price-wrap mt-2">
                                    <span class="price">$12.99</span>
                                    <del class="price-old">$14.99</del>
                                </div> <!-- price-wrap.// -->
                            </figcaption>
                        </figure> <!-- card // -->
                    </div>
                </div>
            </div>

        </div> <!-- container .//  -->
    </section>
@endsection

@push('footer')
    <script>
        $(document).ready(function() {
            /////////////////  items slider. /plugins/slickslider/
            if ($('.slider-items-slick').length > 0) { // check if element exists
                $('.slider-items-slick').slick({
                    infinite: true,
                    swipeToSlide: true,
                    slidesToShow: 4,
                    dots: true,
                    slidesToScroll: 2,
                    prevArrow: '<button type="button" class="d-none d-sm-block slick-prev"><i class="fa fa-chevron-left"></i></button>',
                    nextArrow: '<button type="button" class="d-none d-sm-block slick-next"><i class="fa fa-chevron-right"></i></button>',
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 640,
                            settings: {
                                slidesToShow: 1
                            }
                        }
                    ]
                });
            } // end if

        });
    </script>
@endpush