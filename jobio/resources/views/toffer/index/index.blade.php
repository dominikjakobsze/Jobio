@extends('base.base')

@section('title')
    Jobio
@endsection

@section('content')
    <div class="w-full h-[100dvh] bg-red-300/50 fixed top-0 left-0 flex js cs ss is fr fw overflow-hidden">
        <div data-map class="w-full bg-blue-50/50 h-[100%] relative flex js cs ss is fr fw">
            {{-- @include('toffer.index.shared.options') --}}
        </div>
    </div>
@endsection

@push('css')
@endpush

@push('js')
    @vite('resources/views/toffer/index/index.js');
@endpush
