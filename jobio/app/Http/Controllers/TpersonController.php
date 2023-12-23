<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTpersonRequest;
use App\Http\Requests\UpdateTpersonRequest;
use App\Models\Toffer;
use App\Models\Tperson;
use Illuminate\Support\Facades\Auth;

class TpersonController extends Controller
{
    public function index()
    {
        /** @var \App\Models\Tperson $tperson */
        $tperson = Auth::guard('person')->user();
        dd($tperson?->can('viewAny', Toffer::class)); //returns false if user doesn't have permissions but also null if user is just not authenticated
        dd($this->authorize('viewAny', Toffer::class)); //throws 403 page when false if user doesn't have permissions or if user is just not authenticated

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
    public function store()
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit()
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update()
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy()
    {
        //
    }
}
