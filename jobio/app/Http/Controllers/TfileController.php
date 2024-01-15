<?php

namespace App\Http\Controllers;

use App\Models\Tfile;
use App\Services\DatabaseService;
use App\Services\ImageUploadService;
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

    public function endpointUploadFile(Request $request)
    {
        $this->authorize('viewAny', Tfile::class);
        if (!$request->hasFile('fileMenager')) {
            return abort(500, 'Nie wybrano pliku!');
        }
        $file = $request->file('fileMenager');
        $result = ImageUploadService::saveImage(file: $file);
        $tfile = new Tfile([
            'tperson_id' => Auth::guard('person')->user()->id,
            'file_path' => $result['filePath'],
            'url' => $result['url']
        ]);
        try {
            $tfile->save();
        } catch (Exception $exception) {
            return abort(500, 'Problem z zapisem do bazy danych');
        }
        return response()->json(['success' => true], 200, []);
    }

    public function endpointShowFiles()
    {
        $this->authorize('viewAny', Tfile::class);
        return response()->json(
            Tfile::where('tperson_id', '=', Auth::guard('person')->user()->id)->get()->toArray(),
            200,
            []
        );
    }

    public function endpointDeleteFile($id)
    {
        $tfile = DatabaseService::firstOrNotFoundWithTryCatch(Tfile::where('id', '=', $id));
        $this->authorize('isUserOwnerOfFile', $tfile);
        DatabaseService::deleteWithTryCatch($tfile);
        return response()->json(
            [
                'status' => true,
            ],
            200,
            []
        );
    }

    public function endpointCopyFileLink($id)
    {
        $tfile = DatabaseService::firstOrNotFoundWithTryCatch(Tfile::where('id', '=', $id));
        $this->authorize('isUserOwnerOfFile', $tfile);
        return response()->json(
            [
                'url' => url($tfile?->url),
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
