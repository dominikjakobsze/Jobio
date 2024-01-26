<?php

namespace App\Policies;

use App\Models\Toffer;
use App\Models\Tperson;
use Auth;
use Illuminate\Auth\Access\Response;

class TofferPolicy
{

    public function isUserOwnerOfOffer(Tperson $tperson, Toffer $toffer)
    {
        if ($tperson?->id !== $toffer?->temployer_id) {
            return Response::deny(message: 'Nie możesz wykonywać akcji na czyjejś ofercie!', code: 403);
        }
        return Response::allow();
    }

    public function viewAny(?Tperson $tperson): Response
    {
        return Response::allow();
    }

    public function view(?Tperson $tperson, Toffer $toffer): Response
    {
        return Response::allow();
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(?Tperson $tperson): Response
    {
        return Response::allow();
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(?Tperson $tperson, Toffer $toffer): Response
    {
        return Response::allow();
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(?Tperson $tperson, Toffer $toffer): Response
    {
        return Response::allow();
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(?Tperson $tperson, Toffer $toffer): Response
    {
        return Response::allow();
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(?Tperson $tperson, Toffer $toffer): Response
    {
        return Response::allow();
    }
}
