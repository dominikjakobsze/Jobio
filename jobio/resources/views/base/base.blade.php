<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title')</title>
    @vite('resources/js/app.js')
    @vite('resources/css/app.css')
    @stack('css')
    @stack('js')
</head>

<body>
    @include('base.navbar')
    @yield('content')
</body>

</html>
