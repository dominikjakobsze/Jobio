<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTpersonRequest;
use App\Http\Requests\UpdateTpersonRequest;
use App\Models\Toffer;
use App\Traits\CustomAuthorizeTrait;
use App\Models\Tperson;
use Illuminate\Support\Facades\Auth;

class TpersonController extends Controller
{
    public function index()
    {
        dd($this->authorize('viewAny',Toffer::class));
        //https://laravel.com/docs/10.x/authentication#authenticating-users
        //https://laravel.com/docs/10.x/eloquent#observers
        //https://laravel.com/docs/10.x/authorization#authorizing-actions-using-policies
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTpersonRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Tperson $tperson)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tperson $tperson)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTpersonRequest $request, Tperson $tperson)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tperson $tperson)
    {
        //
    }
}
