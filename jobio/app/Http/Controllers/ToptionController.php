<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreToptionRequest;
use App\Http\Requests\UpdateToptionRequest;
use App\Models\Toption;
use Inertia\Inertia;

class ToptionController extends Controller
{

    public function all()
    {
        return Inertia::render('ToptionController/All/ToptionAll', [
            'options' => Toption::all(),
        ]);
    }

    public function index()
    {
        //
    }

    public function createForm()
    {
        //
    }

    public function store()
    {
        //
    }

    public function show()
    {
        //
    }

    public function edit()
    {
        //
    }

    public function update()
    {
        //
    }

    public function destroy()
    {
        //
    }
}
