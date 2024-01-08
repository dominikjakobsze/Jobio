<?php

namespace App\Policies;

use App\Models\Tfile;
use App\Models\Tperson;
use Illuminate\Auth\Access\Response;

class TfilePolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(Tperson $tperson): Response
    {
        if ($tperson?->role === 'employer') {
            return Response::allow();
        }
        return Response::deny('Nie jestes pracodawcą!', 403);
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(Tperson $tperson, Tfile $tfile): bool
    {
        //
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(Tperson $tperson): bool
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(Tperson $tperson, Tfile $tfile): bool
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function isUserOwnerOfFile(Tperson $tperson, Tfile $tfile): Response
    {
        if ($tperson->id !== $tfile->tperson_id) {
            return Response::deny(message: 'Brak uprawnień', code: 403);
        }
        return Response::allow();
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(Tperson $tperson, Tfile $tfile): bool
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(Tperson $tperson, Tfile $tfile): bool
    {
        //
    }
}
