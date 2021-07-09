@extends('web.layout')

@push('head')

@endpush

@section('main')
    <section class="section-content bg padding-y">
        <div class="container">
            <div class="row">
                <div class="col-md-9">
                    <article class="card card-body mb-3">
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <figure class="itemside">
                                    <div class="aside"><img src="{{ asset('ecommerce/images/items/4.jpg')}}" class="border img-sm"></div>
                                    <figcaption class="info">
                                        <span class="text-muted">Wears</span>
                                        <a href="#" class="title">Jeans bag for hiking </a>
                                    </figcaption>
                                </figure>
                            </div> <!-- col.// -->
                            <div class="col">
                                <div class="input-group input-spinner">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-light" type="button" id="button-plus"> <i class="fa fa-minus"></i> </button>
                                    </div>
                                    <input type="text" class="form-control" value="1">
                                    <div class="input-group-append">
                                        <button class="btn btn-light" type="button" id="button-minus"> <i class="fa fa-plus"></i> </button>
                                    </div>
                                </div> <!-- input-group.// -->
                            </div> <!-- col.// -->
                            <div class="col">
                                <div class="price h5"> $180.00 </div>
                            </div>
                            <div class="col flex-grow-0 text-right">
                                <a href="#" class="btn btn-light"> <i class="fa fa-times"></i> </a>
                            </div>
                        </div> <!-- row.// -->
                    </article>
                    <article class="card card-body mb-3">
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <figure class="itemside">
                                    <div class="aside"><img src="{{ asset('ecommerce/images/items/4.jpg')}}" class="border img-sm"></div>
                                    <figcaption class="info">
                                        <span class="text-muted">Wears</span>
                                        <a href="#" class="title">Jeans bag for hiking </a>
                                    </figcaption>
                                </figure>
                            </div> <!-- col.// -->
                            <div class="col">
                                <div class="input-group input-spinner">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-light" type="button" id="button-plus"> <i class="fa fa-minus"></i> </button>
                                    </div>
                                    <input type="text" class="form-control" value="1">
                                    <div class="input-group-append">
                                        <button class="btn btn-light" type="button" id="button-minus"> <i class="fa fa-plus"></i> </button>
                                    </div>
                                </div> <!-- input-group.// -->
                            </div> <!-- col.// -->
                            <div class="col">
                                <div class="price h5"> $180.00 </div>
                            </div>
                            <div class="col flex-grow-0 text-right">
                                <a href="#" class="btn btn-light"> <i class="fa fa-times"></i> </a>
                            </div>
                        </div> <!-- row.// -->
                    </article>

                </div>
                <div class="col-md-3 mt-3 mt-md-0">
                    <div class="card">
                        <div class="card-body">
                            <dl class="dlist-align">
                                <dt>Total price:</dt>
                                <dd class="text-right">$69.97</dd>
                            </dl>
                            <dl class="dlist-align">
                                <dt>Discount:</dt>
                                <dd class="text-right text-danger">- $10.00</dd>
                            </dl>
                            <dl class="dlist-align">
                                <dt>Total:</dt>
                                <dd class="text-right text-dark b"><strong>$59.97</strong></dd>
                            </dl>
                            <hr>
                            <p class="text-center mb-3">
                                <img src="{{ asset('ecommerce/images/misc/payments.png')}}" height="26">
                            </p>
                            <a href="#" class="btn btn-primary btn-block"> Make Purchase </a>
                            <a href="#" class="btn btn-light btn-block">Continue Shopping</a>
                        </div> <!-- card-body.// -->
                    </div>
                </div>
            </div>
        </div> <!-- container .//  -->
    </section>
@endsection

@push('footer')

@endpush