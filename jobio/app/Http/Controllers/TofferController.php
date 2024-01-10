<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOfferRequest;
use App\Http\Requests\StoreTofferRequest;
use App\Http\Requests\UpdateTofferRequest;
use App\Models\Toffer;
use App\Models\Toption;
use App\Policies\TofferPolicy;
use App\Services\DatabaseService;
use App\Services\DifferentiationService;
use App\Services\UpdaterService;
use Exception;
use Illuminate\Database\Eloquent\Builder as EloquentBuilder; //when using Model
use Illuminate\Database\Query\Builder; //when using DB facade
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class TofferController extends Controller
{
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
        $optionTypeS = Toption::where('option_type', '=', 'S')
            ->get()
            ->toArray();
        $optionTypeD = Toption::where('option_type', '=', 'D')
            ->get()
            ->toArray();
        $optionTypeT = Toption::where('option_type', '=', 'T')
            ->get()
            ->toArray();
        $location = Toffer::select(['city', DB::raw('MAX(id) as id')])
            ->groupBy(['city'])
            ->get()->toArray();
        $standardisedLocation = array_map(function ($item) {
            if (isset($item['city'])) {
                $item['option_value'] = $item['city'];
            }
            return $item;
        }, $location);
        //table[alias]-column||[column,column]-value
        return Inertia::render('OffersMapPage/OffersMap', [
            'items' => [
                'salary' => [
                    'offer-min_salary' => $minSalary,
                    'offer-max_salary' => $maxSalary,
                ],
                'options' => [
                    [
                        "keyName" => "option-option_type-s[]",
                        "items" => $optionTypeS,
                        "displayName" => "Doświadczenie",
                        "iconUrl" => url('/endpoint/image/icons-experience.png'),
                    ],
                    [
                        "keyName" => "option-option_type-d[]",
                        "items" => $optionTypeD,
                        "displayName" => "Narzędzia I Inne",
                        "iconUrl" => url('/endpoint/image/icons-tools.png'),
                    ],
                    [
                        "keyName" => "option-option_type-t[]",
                        "items" => $optionTypeT,
                        "displayName" => "Technologia",
                        "iconUrl" => url('/endpoint/image/icons-technology.png'),
                    ],
                    [
                        "keyName" => "offer-city[]",
                        "items" => $standardisedLocation,
                        "displayName" => "Lokalizacja",
                        "iconUrl" => url('/endpoint/image/icons-location.png'),
                    ],
                ],
            ]
        ]);
    }
    public function endpointIndex(Request $request)
    {
        $options = $request->all();
        $results = Toffer::select(['*'])->with(['toftops.toption'])
            ->options($options)
            ->get();
        //dd($results->toArray(), $request->all());
        return response()->json(
            [
                'offers' => $results->toArray(),
            ],
            200,
            [],
        );
    }

    public function create()
    {
        return Inertia::render('OfferCreatePage/OfferCreatePage', []);
    }

    public function endpointCreate(StoreOfferRequest $storeOfferRequest)
    {
        $validatedData = $storeOfferRequest->validated();
        $sanitizedArray = DifferentiationService::findDifferences(
            templateArray: Toffer::$template,
            toCheckArray: $validatedData
        );
        $returnedModel = UpdaterService::assignValuesToModelWithTryCatch(
            toAssignArray: $sanitizedArray,
            model: new Toffer()
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

    public function show($id)
    {
        try {
            $offer = Toffer::with(['toftops.toption'])->where('id', '=', $id)->first();
            $randomOffers = Toffer::where('id', '!=', $id)->get();
            $randomOffers = $randomOffers?->count() >= 3 ?  $randomOffers?->random(3) : [];
        } catch (Exception $exception) {
            dump($exception);
            return die();
        }
        if ($offer === null) {
            return abort(404, 'Brak Oferty', []);
        }
        $this->authorize('view', $offer);
        return Inertia::render('OfferPage/OfferPage', [
            'offer' => $offer,
            'randomOffers' => $randomOffers
        ]);
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
