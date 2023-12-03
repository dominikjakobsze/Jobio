<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTofferRequest;
use App\Http\Requests\UpdateTofferRequest;
use App\Models\Toffer;
use App\Models\Toption;
use App\Traits\AliasesTrait;
use Illuminate\Support\Facades\DB;

class TofferController extends Controller
{
    use AliasesTrait;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $this->authorize('viewAny', Toffer::class);
        $salaries = collect(
            Toffer::select('min_salary', 'max_salary')
                ->get()
                ->toArray(),
        )->flatten();
        $minSalary = $salaries->min();
        $maxSalary = $salaries->max();
        $offers = Toffer::get()->toArray();
        $optionTypeS = Toption::where('option_type', '=', 'S')
            ->get()
            ->toArray();
        $optionTypeD = Toption::where('option_type', '=', 'D')
            ->get()
            ->toArray();
        $optionTypeT = Toption::where('option_type', '=', 'T')
            ->get()
            ->toArray();
        $location = Toffer::select(['city', 'voivodeship', 'zip_code', DB::raw('MAX(id) as id')])
            ->groupBy(['city', 'voivodeship', 'zip_code'])
            ->get()
            ->toArray();
        //table[alias].column||[column,column].value
        return view('toffer.index.index')->with([
            'data' => [
                'offer.min_salary' => $minSalary,
                'offer.max_salary' => $maxSalary,
                'offers' => $offers,
                'offer.city,voivodeship,zip_code' => $location,
                'option.option_type.s' => $optionTypeS,
                'option.option_type.d' => $optionTypeD,
                'option.option_type.t' => $optionTypeT,
            ]
        ]);
    }

    public function endpointIndex()
    {
        return response()->json(
            [
                'offers' => Toffer::get()->toArray(),
            ],
            200,
            [],
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
    public function store(StoreTofferRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Toffer $toffer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Toffer $toffer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTofferRequest $request, Toffer $toffer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Toffer $toffer)
    {
        //
    }
}
