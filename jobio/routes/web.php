<?php

use App\Http\Controllers\ResourceController;
use App\Http\Controllers\TfileController;
use App\Http\Controllers\TofferController;
use App\Http\Controllers\ToptionController;
use App\Http\Controllers\TpersonController;
use App\Http\Controllers\TresumeController;
use App\Http\Middleware\EnsureUserIsLoggedIn;
use App\Models\Tresume;
use App\Rules\OneOfFieldsMustBePresentButNotBoth;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/sign-in', [TpersonController::class, 'signInView']);
Route::get('/sign-in/{email}/{otp}', [TpersonController::class, 'signInLogin']);
Route::post('/endpoint/sign-in', [TpersonController::class, 'endpointSignIn']);
Route::get('/endpoint/image/{path}', [ResourceController::class, 'display']);
Route::get('/general/error/{code}/{message}', function ($code, $message) {
    //dd($code, $message);
    return abort($code, $message);
});
Route::get('/', [TofferController::class, 'generalMap']);
Route::get('/endpoint/general/offers', [TofferController::class, 'generalAll']);
Route::middleware(['App\Http\Middleware\CheckIfModelExists:App\Models\Toffer'])->group(function () {
    Route::get('/general/offer/{id}', [TofferController::class, 'generalShow']);
});
Route::middleware([EnsureUserIsLoggedIn::class])->group(function () {
    Route::get('/profile', function () {
        if (Auth::guard('person')?->user()?->role === "support") {
            return redirect('/profile/support');
        }
        if (Auth::guard('person')?->user()?->role === "employee") {
            return redirect('/profile/employee');
        }
        if (Auth::guard('person')?->user()?->role === "employer") {
            return redirect('/profile/employer');
        }
    });
});


Route::middleware([EnsureUserIsLoggedIn::class, 'App\Http\Middleware\EnsureUserHasRole:employer'])->group(function () {
    //views&forms
    Route::get('/profile/employer', [TpersonController::class, 'profileEmployer']);
    Route::get('/employer/resumes', [TresumeController::class, 'employerAll']);
    Route::get('/employer/files', [TfileController::class, 'employerAll']);
    Route::get('/employer/offer-create', [TofferController::class, 'employerCreate']);
    Route::get('/employer/offers', [TofferController::class, 'employerAll']);
    //endpoints
    Route::get('/endpoint/employer/resumes', [TresumeController::class, 'endpointEmployerAll']);
    Route::post('/endpoint/employer/file', [TfileController::class, 'endpointEmployerUpload']);
    Route::get('/endpoint/employer/files', [TfileController::class, 'endpointEmployerAll']);
    Route::post('/endpoint/employer/offer', [TofferController::class, 'endpointEmployerCreate']);
    Route::get('/endpoint/employer/offers/sort', [TofferController::class, 'endpointEmployerSort']);
    Route::get('/endpoint/employer/offers', [TofferController::class, 'endpointEmployerAll']);
    //Additional Middlewares
    Route::middleware(['App\Http\Middleware\CheckIfModelExists:App\Models\Tfile'])->group(function () {
        //views&forms
        //endpoints
        Route::delete('/endpoint/employer/file/{id}', [TfileController::class, 'endpointEmployerDestroy']);
        Route::get('/endpoint/employer/copy-file/{id}', [TfileController::class, 'endpointEmployerCopyLink']);
    });
    Route::middleware(['App\Http\Middleware\CheckIfModelExists:App\Models\Toffer'])->group(function () {
        //views&forms
        Route::get('/employer/offer-edit/{id}', [TofferController::class, 'employerEdit']);
        Route::get('/employer/offer-filters/{id}', [TofferController::class, 'employerAssignFilters']);
        //endpoints
        Route::delete('/endpoint/employer/offer/{id}', [TofferController::class, 'endpointEmployerDestroy']);
        Route::put('/endpoint/employer/offer/{id}', [TofferController::class, 'endpointEmployerEdit']);
        Route::put('/endpoint/employer/offer-filters/{id}', [TofferController::class, 'endpointEmployerAssignFilters']);
    });
    Route::middleware(['App\Http\Middleware\CheckIfModelExists:App\Models\Tretof'])->group(function () {
        //views&forms
        Route::get('/employer/applied/{id}', [TresumeController::class, 'employerResumeOffer']);
        //endpoints
        Route::get('/endpoint/employer/deny/{id}', [TresumeController::class, 'endpointEmployerDeny']);
    });
});

Route::middleware([EnsureUserIsLoggedIn::class, 'App\Http\Middleware\EnsureUserHasRole:support'])->group(function () {
    //views&forms
    Route::get('/profile/support', [TpersonController::class, 'profileSupport']);
    Route::get('/support/options', [ToptionController::class, 'supportAll']);
    Route::get('/support/option-create', [ToptionController::class, 'supportCreateForm']);
    Route::get('/support/offers', [TofferController::class, 'supportAll']);
    Route::get('/support/people', [TpersonController::class, 'supportAll']);
    //endpoints
    Route::get('/endpoint/support/people/sort', [TpersonController::class, 'endpointSupportSort']);
    Route::post('/endpoint/support/option', [ToptionController::class, 'endpointSupportCreate']);
    Route::get('/endpoint/support/options/sort', [ToptionController::class, 'endpointSupportSort']);
    Route::get('/endpoint/support/options', [ToptionController::class, 'endpointSupportAll']);
    Route::get('/endpoint/support/offers', [TofferController::class, 'endpointSupportAll']);
    Route::get('/endpoint/support/offers/sort', [TofferController::class, 'endpointSupportSort']);
    //Additional Middlewares
    Route::middleware(['App\Http\Middleware\CheckIfModelExists:App\Models\Toption'])->group(function () {
        //views&forms
        //endpoints
        Route::delete('/endpoint/support/option/{id}', [ToptionController::class, 'endpointSupportDelete']);
    });
    Route::middleware(['App\Http\Middleware\CheckIfModelExists:App\Models\Tperson'])->group(function () {
        //views&forms
        //endpoints
        Route::patch('/endpoint/support/people/{id}', [TpersonController::class, 'endpointSupportEdit']);
    });
    Route::middleware(['App\Http\Middleware\CheckIfModelExists:App\Models\Toffer'])->group(function () {
        //views&forms
        //endpoints
        Route::delete('/endpoint/support/offer/{id}', [TofferController::class, 'endpointSupportDelete']);
    });
});

Route::middleware([EnsureUserIsLoggedIn::class, 'App\Http\Middleware\EnsureUserHasRole:employee'])->group(function () {
    //views&forms
    Route::get('/profile/employee', [TpersonController::class, 'profileEmployee']);
    Route::get('/employee/resume-create-edit', [TresumeController::class, 'employeeCreateEdit']);
    Route::get('/employee/resume', [TresumeController::class, 'employeeShow']);
    //endpoints
    Route::patch('/endpoint/employee/resume-create-edit', [TresumeController::class, 'endpointEmployeeCreateEdit']);
    //Additional Middlewares
    Route::middleware(['App\Http\Middleware\CheckIfModelExists:App\Models\Toffer'])->group(function () {
        //views&forms
        //endpoints
        Route::get('/endpoint/employee/resume/apply/offer/{id}', [TresumeController::class, 'endpointEmployeeResumeApplyOffer']);
    });
});

Route::get('/test/test', function () {
    //if you forget how it works, just play with it by commenting out some fields of data array and see the results in browser, link "/test/test"
    // present, filled, sometimes, nullable, exclude
    $validator = Validator::make(
        [
            "for_rent" => true,
            "for_sale" => true,
            "sale_price" => null,
            "rent_price" => null,
        ],
        [
            "for_rent" => [
                new OneOfFieldsMustBePresentButNotBoth(
                    conflictFieldName: "for_sale"
                ),
                "filled"
            ],
            "for_sale" => [
                new OneOfFieldsMustBePresentButNotBoth(
                    conflictFieldName: "for_rent"
                ),
                "filled"
            ],
            "sale_price" => [
                "present_with:for_sale",
                "exclude_without:for_sale",
                "nullable"
            ],
            "rent_price" => [
                "present_with:for_rent",
                "exclude_without:for_rent",
                "nullable"
            ],
        ],
        [],
        [
            "rent_price" => "cena najmu",
            "sale_price" => "cena sprzedazy",
            "for_sale" => "na sprzedaz",
            "for_rent" => "do wynajecia",
        ]
    );
    if ($validator->fails()) {
        dd($validator->errors()->getMessages());
    }
    dd($validator->validated());
});
