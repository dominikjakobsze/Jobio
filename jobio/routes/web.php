<?php

use App\Http\Controllers\ResourceController;
use App\Http\Controllers\TfileController;
use App\Http\Controllers\TofferController;
use App\Http\Controllers\ToptionController;
use App\Http\Controllers\TpersonController;
use App\Http\Middleware\CheckIfModelExists;
use App\Http\Middleware\EnsureUserIsEmployer;
use App\Http\Middleware\EnsureUserIsLoggedIn;
use App\Http\Requests\StorePostRequest;
use App\Models\Tfile;
use App\Models\Tlog;
use App\Models\Toffer;
use App\Models\Toftop;
use App\Models\Toption;
use App\Models\Tperson;
use App\Models\Treport;
use App\Models\Tresume;
use App\Services\ImageGeneratorService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

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

Route::middleware([EnsureUserIsLoggedIn::class, 'App\Http\Middleware\EnsureUserHasRole:employer'])->group(function () {
    //views&forms
    Route::get('/employer/files', [TfileController::class, 'employerAll']);
    //endpoints
    //Additional Middlewares
    Route::get('/profile/employer', [TpersonController::class, 'profileEmployer']);
    Route::get('/offers', [TofferController::class, 'showAllOffersPanel']);
    Route::post('/endpoint/file', [TfileController::class, 'endpointUploadFile']);
    Route::get('/endpoint/files', [TfileController::class, 'endpointShowFiles']);
    Route::delete('/endpoint/file/{id}', [TfileController::class, 'endpointDeleteFile']);
    Route::get('/endpoint/copy/file/{id}', [TfileController::class, 'endpointCopyFileLink']);
    Route::get('/offer/employer/create', [TofferController::class, 'create']);
    Route::post('/endpoint/offer/employer/create', [TofferController::class, 'endpointCreate']);
    Route::get('/endpoint/offers/employer', [TofferController::class, 'endpointShowAllOffersAfterDelete']);

    Route::middleware(['App\Http\Middleware\CheckIfModelExists:App\Models\Toffer'])->group(function () {
        Route::get('/offer/employer/edit/{id}', [TofferController::class, 'edit']);
        Route::put('/endpoint/offer/employer/edit/{id}', [TofferController::class, 'endpointEdit']);
        Route::delete('/endpoint/offer/employer/delete/{id}', [TofferController::class, 'endpointDelete']);
    });
});

Route::middleware([EnsureUserIsLoggedIn::class, 'App\Http\Middleware\EnsureUserHasRole:support'])->group(function () {
    //views&forms
    Route::get('/profile/support', [TpersonController::class, 'profileSupport']);
    Route::get('/support/options', [ToptionController::class, 'supportAll']);
    Route::get('/support/option-create', [ToptionController::class, 'supportCreateForm']);
    Route::get('/support/offers', [TofferController::class, 'supportAll']);
    //endpoints
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
    Route::middleware(['App\Http\Middleware\CheckIfModelExists:App\Models\Toffer'])->group(function () {
        //views&forms
        //endpoints
        Route::delete('/endpoint/support/offer/{id}', [TofferController::class, 'endpointSupportDelete']);
    });
});

Route::middleware([EnsureUserIsLoggedIn::class, 'App\Http\Middleware\EnsureUserHasRole:employee'])->group(function () {
    Route::get('/profile/employee', [TpersonController::class, 'profileEmployee']);
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
