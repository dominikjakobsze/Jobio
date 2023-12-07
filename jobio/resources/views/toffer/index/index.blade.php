@extends('base.base')

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
