<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTfileRequest;
use App\Http\Requests\UpdateTfileRequest;
use App\Models\Tfile;
use App\Policies\TfilePolicy;
use Inertia\Inertia;

class TfileController extends Controller
{
    public function showAllFiles()
    {
        $this->authorize('viewAny', Tfile::class);
        return Inertia::render('TfileShowAllFilesPage/TfileShowAllFilesPage');
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
