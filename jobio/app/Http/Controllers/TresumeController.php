<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTresumeRequest;
use App\Http\Requests\UpdateTresumeRequest;
use App\Models\Tresume;
use Inertia\Inertia;

class TresumeController extends Controller
{
    public function employeeCreateEdit()
    {
        return Inertia::render('TresumeControllerEmployee/EmployeeCreateEdit/TresumeEmployeeCreateEdit', []);
    }
}
