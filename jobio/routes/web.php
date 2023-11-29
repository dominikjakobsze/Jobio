<?php

use App\Http\Controllers\TpersonController;
use App\Models\Tlog;
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

Route::get('/', [TpersonController::class,'index']);
Route::get('/login', function () {
    //dd(Hash::make('12345678'));
    Auth::guard('person')->attempt([
        'email' => 'dominikjakobsze00@gmail.com',
        'password' => '12345678',
    ]);
    /** @var App\Models\Tperson $user **/
    $user = Auth::guard('person')->user();
    Session::regenerateToken();
    Session::regenerate();
});
Route::get('/logout',function(){
    Session::invalidate();
    Session::regenerateToken();
});
Route::get('/factory', function(){
    dd('t');
});
Route::get('/factory/example', function(){
    /** @var App\Models\Tlog $tlog */
    $tlog = Tlog::factory(1)->make()->first();
    dd($tlog->tpeople()->associate('llllereiiwe92394j2dkf239f23o')->save());
});
