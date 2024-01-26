<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title')</title>
    @vite('resources/js/app.js')
    @vite('resources/css/app.css')
    {{-- @vite('resources/js/react.jsx') --}}
    @stack('css')
    @stack('js')
</head>

<body>
    <div class="w-full min-h-[100dvh] f fr fw ic cc ss jc font-[700] text-2xl text-gray-300 gap-1 overflow-hidden">
        <h1 class="ss flex-[0_0_100%] max-w-[700px] text-center">
            @yield('code')
        </h1>
        <p class="ss flex-[0_0_100%]"></p>
        <h1 class="ss flex-[0_0_100%] max-w-[700px] text-center text-lg">
            @yield('message')
        </h1>
    </div>
</body>

</html>

{{-- 
        @extends('folder.bladeFile')

        @section('title')
            Jobio
        @endsection

        @section('content')
            <map-container class="w-full h-[100dvh] overflow-hidden f fr fw cs is js ss z-[199] fixed top-0 left-0">
                <map-board class="flex-[0_0_100%] b w-full h-[100dvh] overflow-hidden bg-gray-100"></map-board>
            </map-container>
            @include('toffer.index.shared.panel-options')
            @include('toffer.index.shared.panel-columns')
            @include('toffer.index.shared.map-fields')
        @endsection

        @push('css')
        @endpush

        @push('js')
            @vite('resources/views/toffer/index/index.js')
        @endpush  
--}}
