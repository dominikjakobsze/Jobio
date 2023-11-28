<?php

namespace App\Policies;

use App\Models\Toption;
use App\Models\Tperson;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class ToptionPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(Tperson $tperson): bool
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(Tperson $tperson, Toption $toption): bool
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
    public function update(Tperson $tperson, Toption $toption): bool
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(Tperson $tperson, Toption $toption): bool
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(Tperson $tperson, Toption $toption): bool
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(Tperson $tperson, Toption $toption): bool
    {
        //
    }
}
