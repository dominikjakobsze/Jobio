@extends('base.base')

@section('title')
    Jobio
@endsection

@section('content')
    <map-container class="w-full h-[100dvh] bg-red-300 overflow-hidden f fr fw cs is js ss z-[200] fixed top-0 left-0">
        <map-board class="p-2 flex-[0_0_100%] bg-green-50 b w-full h-[50dvh] overflow-hidden"></map-board>
        @include('toffer.index.shared.panel-options')
    </map-container>
@endsection

@push('css')
@endpush

@push('js')
    @vite('resources/views/toffer/index/index.js')
@endpush
