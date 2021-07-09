<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="author" content="Bootstrap-ecommerce by Vosidiy M.">

    <title>Website title - bootstrap html template</title>

    <!-- jQuery -->
    <script src="{{ asset('ecommerce/js/jquery-2.0.0.min.js') }}" type="text/javascript"></script>

    <!-- Bootstrap4 files-->
    <script src="{{ asset('ecommerce/js/bootstrap.bundle.min.js') }}" type="text/javascript"></script>
    <link href="{{ asset('ecommerce/css/bootstrap.css') }}" rel="stylesheet" type="text/css"/>

    <!-- Fonticons -->
    <link href="{{ asset('ecommerce/fonts/fontawesome/css/all.min.css') }}" type="text/css" rel="stylesheet">
    <link href="{{ asset('ecommerce/fonts/feathericons/css/iconfont.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('ecommerce/fonts/material-icons/css/materialdesignicons.css') }}" rel="stylesheet" type="text/css" />

    <!-- custom style -->
    <link href="{{ asset('ecommerce/css/ui.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ asset('ecommerce/css/responsive.css') }}" rel="stylesheet" />

    <!-- custom javascript -->
    <script src="{{ asset('ecommerce/js/script.js') }}" type="text/javascript"></script>

    @stack('head')
</head>