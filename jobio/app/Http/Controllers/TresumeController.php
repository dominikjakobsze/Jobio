<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreResumeRequest;
use App\Models\Toffer;
use App\Models\Tresume;
use App\Models\Tretof;
use App\Services\DatabaseService;
use App\Services\ModelHelperService;
use App\Services\UpdaterService;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Js;
use Inertia\Inertia;

class TresumeController extends Controller
{
    public function employerResumeOffer()
    {
        DatabaseService::firstOrNotFoundWithTryCatch(
            Toffer::where("id", "=", ModelHelperService::$foundModel->toffer_id)
                ->where("temployer_id", "=", Auth::guard('person')->user()->id)
        );
        $templateData = DatabaseService::firstOrNotFoundWithTryCatch(
            Tresume::where("id", "=", ModelHelperService::$foundModel->tresume_id)
        );
        return Inertia::render('TresumeControllerEmployer/EmployerResumeOffer/TresumeEmployerResumeOffer', [
            "resume" => json_decode($templateData->template_data, true),
        ]);
    }

    public function employerAll()
    {
        $returned = DatabaseService::getOrNotFoundWithTryCatch(
            Toffer::where("temployer_id", "=", Auth::guard('person')->user()->id)
        );
        if ($returned->pluck("id")->count() != 0) {
            $offerIds = $returned->pluck("id")->toArray();
            $resumes = DatabaseService::getOrNotFoundWithTryCatch(
                Tretof::whereIn("toffer_id", $offerIds)
            );
        }
        $resumes = $resumes->toArray();
        $resumes = $resumes ?? [];
        $resumes = empty($resumes) ? null : $resumes;
        return Inertia::render('TresumeControllerEmployer/EmployerAll/TresumeEmployerAll', [
            "resumes" => $resumes,
        ]);
    }

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

    public function endpointEmployerDeny()
    {
        DatabaseService::firstOrNotFoundWithTryCatch(
            Toffer::where("id", "=", ModelHelperService::$foundModel->toffer_id)
                ->where("temployer_id", "=", Auth::guard('person')->user()->id)
        );
        DatabaseService::firstOrNotFoundWithTryCatch(
            Tresume::where("id", "=", ModelHelperService::$foundModel->tresume_id)
        );
        DatabaseService::deleteWithTryCatch(
            ModelHelperService::$foundModel
        );
        return response()->json(
            data: true,
            status: 200,
            headers: []
        );
    }

    public function endpointEmployerAll()
    {
        $returned = DatabaseService::getOrNotFoundWithTryCatch(
            Toffer::where("temployer_id", "=", Auth::guard('person')->user()->id)
        );
        if ($returned->pluck("id")->count() != 0) {
            $offerIds = $returned->pluck("id")->toArray();
            $resumes = DatabaseService::getOrNotFoundWithTryCatch(
                Tretof::whereIn("toffer_id", $offerIds)
            );
        }
        $resumes = $resumes->toArray();
        $resumes = $resumes ?? [];
        $resumes = empty($resumes) ? null : $resumes;
        return response()->json(
            data: [
                "resumes" => $resumes,
            ],
            status: 200,
            headers: []
        );
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

    public function endpointEmployeeResumeApplyOffer()
    {
        $resume = DatabaseService::firstOrNullWithTryCatch(Tresume::where("tperson_id", "=", Auth::guard('person')->user()->id));
        if ($resume === null) {
            return abort(409, json_encode(
                [
                    [
                        "error" => "Nie możesz zaaplikować na ofertę ponieważ nie posiadasz CV!"
                    ]
                ]
            ));
        }
        $alreadyApplied = DatabaseService::firstOrNullWithTryCatch(
            Tretof::withTrashed()->where("toffer_id", "=", ModelHelperService::$foundModel->id)
                ->where("tresume_id", "=", $resume->id)
        );
        if ($alreadyApplied !== null) {
            return abort(409, json_encode(
                [
                    [
                        "error" => "Już zaaplikowałeś na tę ofertę!"
                    ]
                ]
            ));
        }
        $returnedModel = UpdaterService::assignValuesToModelWithTryCatch(
            toAssignArray: [
                "toffer_id" => ModelHelperService::$foundModel->id,
                "tresume_id" => $resume->id,
            ],
            model: new Tretof()
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
