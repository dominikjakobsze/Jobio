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
use App\Services\ModelHelperService;
use App\Services\UpdaterService;
use Exception;
use Illuminate\Database\Eloquent\Builder as EloquentBuilder; //when using Model
use Illuminate\Database\Query\Builder; //when using DB facade
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;

class TofferController extends Controller
{
    //                                      GENERAL
    public function generalMap()
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
        return Inertia::render('TofferControllerGeneral/GeneralMap/TofferGeneralMap', [
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
    public function generalAll(Request $request)
    {
        $options = $request->all();
        $results = Toffer::select(['*'])->with(['toftops.toption'])
            ->options($options)
            ->get();
        return response()->json(
            [
                'offers' => $results->toArray(),
            ],
            200,
            [],
        );
    }
    public function generalShow()
    {
        $randomOffers = Toffer::where('id', '!=', ModelHelperService::$foundModel->id)->get();
        $randomOffers = $randomOffers?->count() >= 3 ?  $randomOffers?->random(3) : [];
        return Inertia::render('TofferControllerGeneral/GeneralShow/TofferGeneralShow', [
            'offer' => ModelHelperService::$foundModel,
            'randomOffers' => $randomOffers
        ]);
    }

    //                                      EMPLOYER
    public function employerCreate()
    {
        return Inertia::render('TofferControllerEmployer/EmployerCreate/TofferEmployerCreate', []);
    }

    public function employerAll()
    {
        return Inertia::render('TofferControllerEmployer/EmployerAll/TofferEmployerAll', [
            'offers' => DatabaseService::getOrNotFoundWithTryCatch(
                Toffer::where(
                    'temployer_id',
                    '=',
                    Auth::guard('person')?->user()?->id
                )
            ),
        ]);
    }

    public function employerEdit()
    {
        $this->authorize('isUserOwnerOfOffer', ModelHelperService::$foundModel);
        return Inertia::render('TofferControllerEmployer/EmployerEdit/TofferEmployerEdit', [
            'offer' => ModelHelperService::$foundModel
        ]);
    }

    public function endpointEmployerEdit(StoreOfferRequest $storeOfferRequest)
    {
        $this->authorize('isUserOwnerOfOffer', ModelHelperService::$foundModel);
        $validatedData = $storeOfferRequest->validated();
        $sanitizedArray = DifferentiationService::findDifferences(
            templateArray: Toffer::$template,
            toCheckArray: $validatedData
        );
        $returnedModel = UpdaterService::assignValuesToModelWithTryCatch(
            toAssignArray: $sanitizedArray,
            model: ModelHelperService::$foundModel
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

    public function endpointEmployerAll()
    {
        return response()->json(
            data: [
                'offers' => DatabaseService::getOrNotFoundWithTryCatch(
                    Toffer::where('temployer_id', '=', Auth::guard('person')?->user()?->id)
                )
            ],
            status: 200,
            headers: []
        );
    }

    public function endpointEmployerDestroy()
    {
        $this->authorize('isUserOwnerOfOffer', ModelHelperService::$foundModel);
        $result = DatabaseService::deleteWithTryCatch(ModelHelperService::$foundModel);
        return response()->json(
            data: $result,
            status: 200,
            headers: []
        );
    }

    public function endpointEmployerSort(Request $request)
    {
        return response()->json(data: [
            'offers' => DatabaseService::getOrNotFoundWithTryCatch(Toffer::where('title', 'like', '%' . $request->all()['title'] . '%'))
        ], status: 200, headers: []);
    }

    public function endpointEmployerCreate(StoreOfferRequest $storeOfferRequest)
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

    //                                                  SUPPORT
    public function supportAll()
    {
        return Inertia::render(
            'TofferControllerSupport/SupportAll/TofferSupportAll',
            [
                'offers' => Toffer::all(),
            ]
        );
    }

    public function endpointSupportSort(Request $request)
    {
        return response()->json(data: [
            'offers' => DatabaseService::getOrNotFoundWithTryCatch(Toffer::where('title', 'like', '%' . $request->all()['title'] . '%'))
        ], status: 200, headers: []);
    }

    public function endpointSupportDelete()
    {
        return response()->json(
            data: [
                'result' => DatabaseService::deleteWithTryCatch(model: ModelHelperService::$foundModel),
            ],
            status: 200,
            headers: []
        );
    }
    public function endpointSupportAll()
    {
        return response()->json(data: [
            'offers' => Toffer::all(),
        ], status: 200, headers: []);
    }
}
