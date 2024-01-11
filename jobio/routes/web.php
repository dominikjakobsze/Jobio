<?php

use App\Http\Controllers\ResourceController;
use App\Http\Controllers\TfileController;
use App\Http\Controllers\TofferController;
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
// https://github.com/barryvdh/laravel-ide-helper#usage
//image/files-dominik.txt

Route::get('/', [TofferController::class, 'index']);
Route::get('/sign-in', [TpersonController::class, 'signInView']);
Route::get('/sign-in/{email}/{otp}', [TpersonController::class, 'signInLogin']);
Route::get('/general/error/{code}/{message}', function ($code, $message) {
    //dd($code, $message);
    return abort($code, $message);
});
Route::middleware([EnsureUserIsLoggedIn::class, 'App\Http\Middleware\EnsureUserHasRole:employer'])->group(function () {
    Route::get('/files', [TfileController::class, 'showAllFiles']);
    Route::post('/endpoint/file', [TfileController::class, 'endpointUploadFile']);
    Route::get('/endpoint/files', [TfileController::class, 'endpointShowFiles']);
    Route::delete('/endpoint/file/{id}', [TfileController::class, 'endpointDeleteFile']);
    Route::get('/endpoint/copy/file/{id}', [TfileController::class, 'endpointCopyFileLink']);
    Route::get('/offer/employer/create', [TofferController::class, 'create']);
    Route::post('/endpoint/offer/employer/create', [TofferController::class, 'endpointCreate']);
    Route::middleware(['App\Http\Middleware\CheckIfModelExists:App\Models\Toffer'])->group(function () {
        Route::get('/offer/employer/edit/{id}', [TofferController::class, 'edit']);
        Route::put('/endpoint/offer/employer/edit/{id}', [TofferController::class, 'endpointEdit']);
        Route::get('/offer/{id}', [TofferController::class, 'show']);
    });
});
Route::post('/endpoint/sign-in', [TpersonController::class, 'endpointSignIn']);
Route::get('/endpoint/toffers', [TofferController::class, 'endpointIndex']);
Route::get('/endpoint/image/{path}', [ResourceController::class, 'display']);

Route::middleware([EnsureUserIsLoggedIn::class, 'App\Http\Middleware\EnsureUserHasRole:support'])->group(function () {
    Route::get('/profile/support', [TpersonController::class, 'profileSupport']);
});

//idk
Route::get('/inertia', function () {
    return Inertia::render('OffersMapPage/OffersMap', [
        'test' => 'test',
    ]);
});

Route::get('/login', function () {
    //dd(Hash::make('12345678'));
    Auth::guard('person')->attempt([
        'email' => 'lesly.muller@hotmail.com',
        'password' => '12345678',
    ]);
    /** @var App\Models\Tperson $user **/
    $user = Auth::guard('person')->user();
    Session::regenerateToken();
    Session::regenerate();
});
Route::get('/logout', function () {
    Session::invalidate();
    Session::regenerateToken();
});


Route::get('/test', function () {
    dd(Auth::guard('person')->user());
    //Tresume::whereNotNull('id')->forceDelete();
    //dd(Tresume::factory()->count(50)->create());
    //dd(Toption::factory()->count(3)->create());
    //dd(Tperson::first()->delete());
    //dd(Tperson::factory()->count(3)->create());
    //dd(Tperson::factory()->count(30)->create());
});
