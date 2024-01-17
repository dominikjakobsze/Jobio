<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreResumeRequest;
use App\Http\Requests\StoreTresumeRequest;
use App\Http\Requests\UpdateTresumeRequest;
use App\Models\Tperson;
use App\Models\Tresume;
use App\Services\DatabaseService;
use App\Services\DifferentiationService;
use App\Services\UpdaterService;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TresumeController extends Controller
{
    public function employeeCreateEdit()
    {
        return Inertia::render('TresumeControllerEmployee/EmployeeCreateEdit/TresumeEmployeeCreateEdit', []);
    }

    public function endpointEmployeeCreateEdit(StoreResumeRequest $storeResumeRequest)
    {
        $tresume = DatabaseService::firstOrNullWithTryCatch(Tresume::where("tperson_id", "=", Auth::guard('person')?->user()?->id));
        $validatedData = $storeResumeRequest->validated();
        $returnedModel = UpdaterService::assignValuesToModelWithTryCatch(
            toAssignArray: [
                "tperson_id" => Auth::guard('person')?->user()?->id,
                "template_data" => json_encode($validatedData),
            ],
            model: $tresume ?? new Tresume()
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
}
