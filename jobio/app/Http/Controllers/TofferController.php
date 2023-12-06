<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTofferRequest;
use App\Http\Requests\UpdateTofferRequest;
use App\Models\Toffer;
use App\Models\Toption;
use App\Traits\AliasesTrait;
use Illuminate\Database\Eloquent\Builder as EloquentBuilder; //when using Model
use Illuminate\Database\Query\Builder; //when using DB facade
use Illuminate\Http\Request;
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
            ->get()
            ->toArray();
        //table[alias]-column||[column,column]-value
        return view('toffer.index.index')->with([
            'items' => [
                'salary' => [
                    'offer-min_salary' => $minSalary,
                    'offer-max_salary' => $maxSalary,
                ],
                'options' => [
                    'offer-city' => $location,
                    'option-option_type-s' => $optionTypeS,
                    'option-option_type-d' => $optionTypeD,
                    'option-option_type-t' => $optionTypeT,
                ],
            ]
        ]);
    }
    public function endpointIndex(Request $request)
    {
        $options = $request->all();
        $results = Toffer::select(['*'])
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
