<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOptionRequest;
use App\Models\Toption;
use App\Services\DatabaseService;
use App\Services\DifferentiationService;
use App\Services\UpdaterService;
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

    public function endpointCreate(StoreOptionRequest $storeOptionRequest)
    {
        $validatedData = $storeOptionRequest->validated();
        $sanitizedArray = DifferentiationService::findDifferences(
            templateArray: Toption::$template,
            toCheckArray: $validatedData
        );
        $returnedModel = UpdaterService::assignValuesToModelWithTryCatch(
            toAssignArray: $sanitizedArray,
            model: new Toption()
        );
        $result = DatabaseService::saveWithTryCatch(
            model: $returnedModel
        );
        return response()->json(
            data: $result,
            status: 200,
            headers: []
        );
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
