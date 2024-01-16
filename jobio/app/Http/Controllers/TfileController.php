<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFileRequest;
use App\Models\Tfile;
use App\Services\DatabaseService;
use App\Services\DifferentiationService;
use App\Services\ImageUploadService;
use App\Services\ModelHelperService;
use App\Services\UpdaterService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TfileController extends Controller
{
    public function employerAll()
    {
        return Inertia::render('TfileControllerEmployer/EmployerAll/TfileEmployerAll');
    }

    public function endpointEmployerUpload(StoreFileRequest $storeFileRequest)
    {
        $validatedData = $storeFileRequest->validated();
        $result = ImageUploadService::saveImage(file: $validatedData['fileMenager']);
        $returnedModel = UpdaterService::assignValuesToModelWithTryCatch(
            toAssignArray: [
                "tperson_id" => Auth::guard('person')?->user()?->id,
                "file_path" => $result['filePath'],
                "url" => $result['url'],
            ],
            model: new Tfile()
        );
        $result = DatabaseService::saveWithTryCatch(
            model: $returnedModel
        );
        return response()->json(['success' => true], 200, []);
    }

    public function endpointEmployerAll()
    {
        return response()->json(
            DatabaseService::getOrNotFoundWithTryCatch(Tfile::where('tperson_id', '=', Auth::guard('person')->user()->id)),
            200,
            []
        );
    }

    public function endpointEmployerDestroy()
    {
        $this->authorize('isUserOwnerOfFile', ModelHelperService::$foundModel);
        return response()->json(
            [
                'status' => DatabaseService::deleteWithTryCatch(ModelHelperService::$foundModel),
            ],
            200,
            []
        );
    }

    public function endpointEmployerCopyLink()
    {
        $this->authorize('isUserOwnerOfFile', ModelHelperService::$foundModel);
        return response()->json(
            [
                'url' => url(ModelHelperService::$foundModel?->url),
            ],
            200,
            []
        );
    }
}
