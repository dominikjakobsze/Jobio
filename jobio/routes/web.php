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
use App\Services\ImageGeneratorService;
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
Route::get('/offer/{id}', [TofferController::class, 'show']);
Route::get('/endpoint/toffers', [TofferController::class, 'endpointIndex']);
Route::get('/endpoint/image/{path}', [ResourceController::class, 'display']);

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
    ImageGeneratorService::generateImage();
    $result = Http::get('https://picsum.photos/200');

    // Check if the request was successful (status code 200)
    if ($result->successful()) {
        // Get the content type from the response headers
        $contentType = $result->header('Content-Type');

        // Map content types to file extensions
        $extension = ['image/jpeg' => 'jpg', 'image/png' => 'png'][$contentType] ?? 'jpg';

        // Generate a unique filename with the determined extension
        $filename = 'image_' . uniqid() . date_timestamp_get(now()) . '.' . $extension;

        // Save the image content to the storage disk (configure your disk in filesystems.php)
        Storage::disk('local')->put('/app/app_files/images/' . $filename, $result->body());

        $url = url('/endpoint/image/images-' . $filename);
        dump($url, $filename);
        return "<img src=" . $url . "/>";
    } else {
        // Handle the case where the HTTP request was not successful
        return abort(500, 'File not saved!');
    }
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
