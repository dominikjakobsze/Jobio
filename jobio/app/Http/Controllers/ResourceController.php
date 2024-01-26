<?php

namespace App\Http\Controllers;

use App\Models\Tfile;
use App\Services\DatabaseService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class ResourceController extends Controller
{
    public function display($path)
    {
        // if(Auth::user() == null){
        //     abort(500);
        // }
        $tfile = Tfile::withTrashed()->where('url', '=', '/endpoint/image/' . $path)->first();
        if ($tfile !== null) {
            if ($tfile->trashed() === true) {
                return abort(404, 'Plik istnieje, ale nie jest dostepny!');
            }
        }
        $path = str_replace("-", "/", $path);
        if (!Storage::disk('local')->exists('/app/app_files/' . $path)) {
            abort(404);
        }
        $contents = Storage::disk('local')->get('/app/app_files/' . $path);
        $mimeType = File::mimeType(Storage::disk('local')->path('/app/app_files/' . $path));
        return response($contents, 200, [
            "Content-Type" => $mimeType
        ]);
    }
}
