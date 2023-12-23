<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTofferRequest;
use App\Http\Requests\UpdateTofferRequest;
use App\Models\Toffer;
use App\Models\Toption;
use App\Policies\TofferPolicy;
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
            ->when(array_key_exists('offer-city', $options), function (EloquentBuilder $query) use ($options) {
                $query->where(function (EloquentBuilder $query) use ($options) {
                    foreach ($options['offer-city'] as $option) {
                        $query->orWhere(function (EloquentBuilder $query) use ($option) {
                            $query->where('city', '=', $option);
                        });
                    }
                });
            })
            ->when(array_key_exists('offer-min_salary', $options) && array_key_exists('offer-max_salary', $options), function (EloquentBuilder $query) use ($options) {
                $query->when(ctype_digit($options['offer-min_salary']) && ctype_digit($options['offer-max_salary']), function (EloquentBuilder $query) use ($options) {
                    $query->where(function (EloquentBuilder $query) use ($options) {
                        $query->where('min_salary', '>=', (int)$options['offer-min_salary'])->where('max_salary', '<=', (int)$options['offer-max_salary']);
                    });
                });
            })
            ->when(array_key_exists('option-option_type-d', $options), function (EloquentBuilder $query) use ($options) {
                $query->where(function (EloquentBuilder $query) use ($options) {
                    $query->whereHas('toftops.toption', function (EloquentBuilder $query) use ($options) {
                        $query->where(function (EloquentBuilder $query) use ($options) {
                            foreach ($options['option-option_type-d'] as $option) {
                                $query->orWhere(function (EloquentBuilder $query) use ($option) {
                                    $query->where('option_type', '=', 'd')->where('option_value', '=', $option);
                                });
                            }
                        });
                    });
                });
            })
            ->when(array_key_exists('option-option_type-s', $options), function (EloquentBuilder $query) use ($options) {
                $query->where(function (EloquentBuilder $query) use ($options) {
                    $query->whereHas('toftops.toption', function (EloquentBuilder $query) use ($options) {
                        $query->where(function (EloquentBuilder $query) use ($options) {
                            foreach ($options['option-option_type-s'] as $option) {
                                $query->orWhere(function (EloquentBuilder $query) use ($option) {
                                    $query->where('option_type', '=', 's')->where('option_value', '=', $option);
                                });
                            }
                        });
                    });
                });
            })
            ->when(array_key_exists('option-option_type-t', $options), function (EloquentBuilder $query) use ($options) {
                $query->where(function (EloquentBuilder $query) use ($options) {
                    $query->whereHas('toftops.toption', function (EloquentBuilder $query) use ($options) {
                        $query->where(function (EloquentBuilder $query) use ($options) {
                            foreach ($options['option-option_type-t'] as $option) {
                                $query->orWhere(function (EloquentBuilder $query) use ($option) {
                                    $query->where('option_type', '=', 't')->where('option_value', '=', $option);
                                });
                            }
                        });
                    });
                });
            })
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
    public function show($id)
    {
        try {
            $offer = Toffer::with(['toftops.toption'])->where('id', '=', $id)->first();
            $randomOffers = Toffer::all()->random(3);
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
