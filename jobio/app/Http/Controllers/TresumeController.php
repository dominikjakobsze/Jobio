<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreResumeRequest;
use App\Models\Tresume;
use App\Services\DatabaseService;
use App\Services\UpdaterService;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TresumeController extends Controller
{
    public function employeeCreateEdit()
    {
        $templateData = DatabaseService::firstOrNullWithTryCatch(
            Tresume::select(["template_data"])->where("tperson_id", "=", Auth::guard('person')?->user()?->id)
        );

        return Inertia::render('TresumeControllerEmployee/EmployeeCreateEdit/TresumeEmployeeCreateEdit', [
            "resume" => $templateData !== null ? json_decode($templateData->template_data, true) : null,
        ]);
    }

    public function employeeShow()
    {
        $templateData = DatabaseService::firstOrNotFoundWithTryCatch(
            Tresume::select(["template_data"])->where("tperson_id", "=", Auth::guard('person')?->user()?->id)
        );

        return Inertia::render('TresumeControllerEmployee/EmployeeShow/TresumeEmployeeShow', [
            "resume" => $templateData !== null ? json_decode($templateData->template_data, true) : null,
        ]);
    }

    public function endpointEmployeeCreateEdit(StoreResumeRequest $storeResumeRequest)
    {
        $tresume = DatabaseService::firstOrNullWithTryCatch(Tresume::where("tperson_id", "=", Auth::guard('person')?->user()?->id));
        $validatedData = collect($storeResumeRequest->validated());
        $returnedModel = UpdaterService::assignValuesToModelWithTryCatch(
            toAssignArray: [
                "tperson_id" => Auth::guard('person')?->user()?->id,
                "template_data" => $validatedData->toJson(),
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
