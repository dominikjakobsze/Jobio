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
        $this->authorize('viewAny', Tfile::class);
        return response()->json(
            Tfile::where('tperson_id', '=', Auth::guard('person')->user()->id)->get()->toArray(),
            200,
            []
        );
    }

    public function endpointEmployerDestroy()
    {
        $this->authorize('isUserOwnerOfFile', ModelHelperService::$foundModel);
        return response()->json(
            [
                'status' => DatabaseService::forceDeleteWithTryCatch(ModelHelperService::$foundModel),
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
