<header class="section-header">
    <section class="border-bottom">
        <nav class="navbar navbar-main  navbar-expand-lg navbar-light">
            <div class="container">
                <a class="navbar-brand py-2" href="{{ route('web.homepage.index') }}"><img src="{{ asset('ecommerce/images/bookworm_logo.svg') }}" class="logo"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav2" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="main_nav2">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('web.homepage.index') }}">Home </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Shop</a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="{{ route('web.shop.index') }}">Grid</a>
                                <a class="dropdown-item" href="{{ route('web.shop.list') }}">List</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('web.products.index') }}">Product</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('web.about.index') }}">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('web.cart.index') }}">Cart</a>
                        </li>
                    </ul>
                </div> <!-- collapse .// -->
            </div> <!-- container .// -->
        </nav>
    </section> <!-- header-main .// -->
</header> <!-- section-header.// -->