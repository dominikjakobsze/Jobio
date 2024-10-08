<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePersonRoleRequest;
use App\Models\Toffer;
use App\Models\Tperson;
use App\Services\DatabaseService;
use App\Services\ModelHelperService;
use App\Services\UpdaterService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class TpersonController extends Controller
{
    public function index()
    {
        /** @var \App\Models\Tperson $tperson */
        $tperson = Auth::guard('person')->user();
        dd($tperson?->can('viewAny', Toffer::class)); //returns false if user doesn't have permissions but also null if user is just not authenticated
        dd($this->authorize('viewAny', Toffer::class)); //throws 403 page when false if user doesn't have permissions or if user is just not authenticated

        //https://laravel.com/docs/10.x/authentication#authenticating-users
        //https://laravel.com/docs/10.x/eloquent#observers
        //https://laravel.com/docs/10.x/authorization#authorizing-actions-using-policies
    }

    public function signInView()
    {
        return Inertia::render('SignInPage/SignInPage');
    }

    public function endpointSignIn(Request $request)
    {
        if (!isset($request->all()['email'])) {
            return abort(500, 'Brak pola email');
        }
        if ($request->all()['email'] === null) {
            return abort(500, 'Pole email jest puste');
        }
        $email = $request->all()['email'];
        $tperson = Tperson::where('email', '=', $email)->first();
        if ($tperson === null) {
            //new person
            $newTperson = new Tperson();
            do {
                $folder = implode("", fake()->words(3, false));
                $folderExists = Tperson::where('folder', '=', $folder)->first();
                if ($folderExists === null) {
                    break;
                }
            } while (true);
            $newTperson->folder = $folder;
            $passwordOTP = implode("", fake()->words(4, false));
            $otp = Hash::make($passwordOTP);
            $newTperson->otp = $otp;
            $newTperson->email = $email;
            $newTperson->role = "employee";
            try {
                $newTperson->save();
            } catch (Exception $exception) {
                return abort(500, 'Brak generowania kodu');
                dd($exception);
            }
        } else {
            //existing person
            $passwordOTP = implode("", fake()->words(4, false));
            $otp = Hash::make($passwordOTP);
            $tperson->otp = $otp;
            try {
                $tperson->save();
            } catch (Exception $exception) {
                return abort(500, 'Brak generowania kodu');
                dd($exception);
            }
        }
        //openssl
        $encryptedEmail = Crypt::encryptString($email);
        $encryptedOTP = Crypt::encryptString($passwordOTP);
        return Response()->json([
            'url' => url('/sign-in/' . $encryptedEmail . '/' . $encryptedOTP),
        ], 200, [], 0);
    }

    public function signInLogin($email, $otp)
    {
        if (!isset($email) || !isset($otp)) {
            return abort(500, 'Link niepoprawny');
        }
        $decryptedEmail = Crypt::decryptString($email);
        $decryptedOTP = Crypt::decryptString($otp);
        Session::invalidate();
        Session::regenerateToken();
        try {
            $result = Auth::guard('person')->attempt([
                'email' => $decryptedEmail,
                'password' => $decryptedOTP,
            ]);
        } catch (Exception $exception) {
            return abort(500, 'Wygeneruj kod ponownie');
        }
        if ($result === false) {
            return abort(500, 'Wygeneruj kod ponownie!');
        }
        /** @var \App\Models\Tperson $user */
        $user = Auth::guard('person')->user();
        $user->otp = null;
        $user->save();
        Session::regenerateToken();
        Session::regenerate();
        return redirect('/', 302, [], null);
    }


    public function profileSupport()
    {
        return Inertia::render('Profiles/ProfileSupport', []);
    }

    public function profileEmployee()
    {
        return Inertia::render('Profiles/ProfileEmployee', []);
    }

    public function profileEmployer()
    {
        return Inertia::render('Profiles/ProfileEmployer', []);
    }

    public function supportAll()
    {
        return Inertia::render('TpersonControllerSupport/SupportAll/TpersonSupportAll', [
            "users" => DatabaseService::getOrNotFoundWithTryCatch(Tperson::where("role", "!=", "support")),
        ]);
    }

    public function endpointSupportSort(Request $request)
    {
        return response()->json(data: [
            'users' => DatabaseService::getOrNotFoundWithTryCatch(Tperson::where('email', 'like', '%' . $request->all()['email'] . '%')->where("role", "!=", "support"))
        ], status: 200, headers: []);
    }

    public function endpointSupportEdit(StorePersonRoleRequest $storePersonRoleRequest)
    {
        $validatedData = $storePersonRoleRequest->validated();
        $returnedModel = UpdaterService::assignValuesToModelWithTryCatch(
            toAssignArray: [
                "role" => $validatedData["role"]
            ],
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
}
