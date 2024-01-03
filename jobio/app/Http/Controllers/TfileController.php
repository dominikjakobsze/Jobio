<?php

namespace App\Http\Controllers;

use App\Models\Tfile;
use App\Services\ImageUploadService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;
use Inertia\Inertia;
use PhpParser\Node\Expr\Instanceof_;

class TfileController extends Controller
{
    public function showAllFiles()
    {
        $this->authorize('viewAny', Tfile::class);
        return Inertia::render('TfileShowAllFilesPage/TfileShowAllFilesPage');
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
