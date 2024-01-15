<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOptionRequest;
use App\Models\Toption;
use App\Services\DatabaseService;
use App\Services\DifferentiationService;
use App\Services\ModelHelperService;
use App\Services\UpdaterService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ToptionController extends Controller
{

    public function supportAll()
    {
        return Inertia::render('ToptionControllerSupport/SupportAll/ToptionSupportAll', [
            'options' => Toption::all(),
        ]);
    }

    public function supportCreateForm()
    {
        return Inertia::render('ToptionControllerSupport/SupportCreateForm/ToptionSupportCreateForm', []);
    }



    public function endpointSupportCreate(StoreOptionRequest $storeOptionRequest)
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

    public function endpointSupportSort(Request $request)
    {
        return response()->json(data: [
            'options' => DatabaseService::getOrNotFoundWithTryCatch(Toption::where('option_value', 'like', '%' . $request->all()['option_value'] . '%'))
        ], status: 200, headers: []);
    }

    public function endpointSupportDelete()
    {
        return response()->json(
            data: [
                'result' => DatabaseService::forceDeleteWithTryCatch(model: ModelHelperService::$foundModel),
            ],
            status: 200,
            headers: []
        );
    }

    public function endpointSupportAll()
    {
        return response()->json(
            data: [
                'options' => Toption::all(),
            ],
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
