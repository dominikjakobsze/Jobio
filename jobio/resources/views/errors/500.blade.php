@extends('errors.base')

@section('title', __('Server Error'))
@section('code', '500')
@section('message', $exception->getMessage())
