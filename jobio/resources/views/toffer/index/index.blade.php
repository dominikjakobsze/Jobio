@extends('base.base')

@section('title')
    Jobio
@endsection

@section('content')
    <div class="w-full h-[100dvh] fixed top-0 left-0 flex js cs ss is fr fw overflow-hidden z-[100]">
        <div data-map class="w-full h-[100%] relative flex js cs ss is fr fw z-[101]">
        </div>
        @include('toffer.index.shared.options')
        @include('toffer.index.shared.menu')
    </div>
@endsection

@push('css')
@endpush

@push('js')
    @vite('resources/views/toffer/index/index.js')
@endpush
