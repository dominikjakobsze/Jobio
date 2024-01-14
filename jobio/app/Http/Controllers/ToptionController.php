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

    public function createForm()
    {
        return Inertia::render('ToptionController/CreateForm/ToptionCreateForm', []);
    }

    public function endpointCreate()
    {
        dd('endpointCreate');
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
