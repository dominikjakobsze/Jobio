@extends('errors.base')

@section('title', __('Not Found'))
@section('code', '404')
@section('message', $exception->getMessage())
