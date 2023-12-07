<?php

use App\Http\Controllers\ResourceController;
use App\Http\Controllers\TofferController;
use App\Http\Controllers\TpersonController;
use App\Models\Tlog;
use App\Models\Toffer;
use App\Models\Toftop;
use App\Models\Toption;
use App\Models\Tperson;
use App\Models\Treport;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;

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
Route::get('/endpoint/toffers', [TofferController::class, 'endpointIndex']);
Route::get('/endpoint/image/{path}', [ResourceController::class, 'display']);

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
    // dd(
    //     Toffer::with(['toftops.toption'])
    //         ->whereRelation('toftops.toption', 'option_value', '=', 'possimusut')
    //         ->get()
    //         ->toArray(),
    //     //Toffer::with(['toftops.toption'])->whereRelation('toftops.toption', 'option_value', "=", "possimusut")->ddRawSql()
    // );
    // $toffers = Toffer::get();
    // foreach($toffers as $toffer){
    //     $toffer['company_icon'] = 'https://picsum.photos/'.fake()->numberBetween(50,340).'';
    //     $toffer->save();
    // }
});
Route::get('/factory/example', function () {
    /** @var App\Models\Tlog $tlog */
    $tlog = Tlog::factory(1)
        ->make()
        ->first();
    dd(
        $tlog
            ->tpeople()
            ->associate('llllereiiwe92394j2dkf239f23o')
            ->save(),
    );
});
