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
        $templateData = $templateData !== null ? collect(json_decode($templateData->template_data, true)) : null;

        if ($templateData !== null) {
            $blockNames = collect($templateData)
                ->filter(function ($value) {
                    return is_array($value);
                })
                ->flatMap(function ($value, $key) {
                    if (!is_string($key) || empty($value)) {
                        return [];
                    }

                    $blockName = ["componentName" => $key, "props" => []];

                    return collect($value)->map(function ($inValue, $inKey) use ($blockName) {
                        if (!is_string($inKey) || !is_array($inValue)) {
                            return null;
                        }
                        $blockName["props"]["id"] = $inKey;
                        $blockName["props"] = array_merge($blockName["props"], $inValue);
                        return $blockName;
                    });
                })
                ->values();

            $blockNames->pluck('componentName')->each(function ($key) use ($templateData) {
                $templateData->forget($key);
            });

            $blockNames->groupBy('componentName')->each(function ($group, $componentName) use ($templateData) {
                $props = $group->pluck('props')->toArray();
                $templateData->put($componentName, $props);
            });
        }

        return Inertia::render('TresumeControllerEmployee/EmployeeCreateEdit/TresumeEmployeeCreateEdit', [
            "resume" => $templateData,
        ]);
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
