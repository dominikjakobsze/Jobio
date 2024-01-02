<?php

namespace App\Http\Controllers;

use App\Models\Tfile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

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
        dd('test', Auth::guard('person')->user(), $request->allFiles());
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
