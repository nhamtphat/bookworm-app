<!DOCTYPE HTML>
<html lang="en">
@include('web.layout.head')

<body>
@include('web.layout.header')

    @yield('main')

@include('web.layout.footer')

@stack('footer')
</body>
</html>