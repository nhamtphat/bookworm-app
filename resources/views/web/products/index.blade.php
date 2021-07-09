@extends('web.layout')

@push('head')

@endpush

@section('main')
    <section class="section-content bg padding-y">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <article class="card">
                        <div class="card-body">
                            <div class="row">
                                <aside class="col-md-4">
                                    <article class="gallery-wrap">
                                        <div class="card img-wrap">
                                            <a href="#"> <img src="{{asset('ecommerce/images/items/12.jpg')}}"></a>
                                        </div> <!-- card img-big-wrap.// -->
                                    </article> <!-- gallery-wrap .end// -->
                                </aside>
                                <main class="col-md-8">
                                    <article>
                                        <a href="#" class="text-primary btn-link">Clothes</a>
                                        <h3 class="title">Winter Boots Leather for Men</h3>
                                        <div>
                                            <ul class="rating-stars">
                                                <li style="width:60%" class="stars-active">
                                                    <img src="../images/icons/stars-active.svg" alt="">
                                                </li>
                                                <li>
                                                    <img src="../images/icons/starts-disable.svg" alt="">
                                                </li>
                                            </ul>
                                            <span class="label-rating mr-3 text-muted">7/10</span>
                                            <a href="#" class="btn-link  mr-3 text-muted"> <i class="fa fa-heart"></i> Save for later </a>
                                            <a href="#" class="btn-link text-muted"> <i class="fa fa-book-open"></i> Compare </a>
                                        </div>

                                        <hr>

                                        <div class="mb-3">
                                            <h6>Short description</h6>
                                            <ul class="list-dots mb-0">
                                                <li>Made in Russia</li>
                                                <li>Wolf leather </li>
                                                <li>Rubber material bottom</li>
                                                <li>Dark blue color</li>
                                            </ul>
                                        </div>
                                    </article> <!-- product-info-aside .// -->
                                </main> <!-- col.// -->
                            </div> <!-- row.// -->
                        </div> <!-- card-body.// -->
                    </article>
                </div>
                <div class="col-md-4 mt-3 mt-md-0">
                    <div class="card">
                        <div class="card-header">
                            <div class="">
                                <del class="text-gray-light">$230.00</del>
                                <var class="price h4">$230.00</var> <br>
                            </div> <!-- price-detail-wrap .// -->
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="form-group col-md flex-grow-0">
                                    <label>Quantity</label>
                                    <div class="input-group mb-3 input-spinner">
                                        <div class="input-group-prepend">
                                            <button class="btn btn-light" type="button" id="button-plus"> + </button>
                                        </div>
                                        <input type="text" class="form-control" value="1">
                                        <div class="input-group-append">
                                            <button class="btn btn-light" type="button" id="button-minus"> − </button>
                                        </div>
                                    </div>
                                </div> <!-- col.// -->
                                <button class="btn btn-block btn-primary">Apply</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-4">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">
                            <header class="">
                                <div class="form-inline">
                                    <h5>Customer Reviews</h5>
                                    <span class="ml-3 mr-md-auto">32 Items found </span>
                                    <select class="mr-2 form-control">
                                        <option>Latest items</option>
                                        <option>Trending</option>
                                        <option>Most Popular</option>
                                        <option>Cheapest</option>
                                    </select>
                                </div>
                            </header><!-- sect-heading -->
                        </div>
                        <div class="card-body">
                            <article class="box mb-3 border-0">
                                <div class="icontext w-100">
                                    <img src="{{ asset('ecommerce/images/avatars/avatar1.jpg')}}" class="img-xs icon rounded-circle">
                                    <div class="text">
                                        <span class="date text-muted float-md-right">24.04.2020 </span>
                                        <h6 class="mb-1">Mike John </h6>
                                        <ul class="rating-stars">
                                            <li style="width:80%" class="stars-active">
                                                <img src="{{ asset('ecommerce/images/icons/stars-active.svg')}}" alt="">
                                            </li>
                                            <li>
                                                <img src="{{ asset('ecommerce/images/icons/starts-disable.svg')}}" alt="">
                                            </li>
                                        </ul>
                                        <span class="label-rating text-warning">Good</span>
                                    </div>
                                </div> <!-- icontext.// -->
                                <div class="mt-3">
                                    <p>
                                        Dummy comment Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mt-3 mt-md-0">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title mb-4">Write a review</h4>
                            <form>
                                <div class="form-row">
                                    <div class="col form-group">
                                        <label>Name</label>
                                        <input type="text" class="form-control" placeholder="">
                                    </div> <!-- form-group end.// -->
                                </div> <!-- form-row.// -->
                                <div class="form-group">
                                    <label>What is message about?</label>
                                    <textarea class="form-control" rows="3"></textarea>
                                </div>
                                <div class="form-group">
                                    <label>What is message about?</label>
                                    <select class="form-control">
                                        <option>Select</option>
                                        <option>Technical issue</option>
                                        <option>Money refund</option>
                                        <option>Recommendation</option>
                                    </select>
                                </div>
                                <button class="btn btn-primary btn-block">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div> <!-- container .//  -->
    </section>
@endsection

@push('footer')

@endpush