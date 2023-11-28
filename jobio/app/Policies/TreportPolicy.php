<?php

namespace App\Policies;

use App\Models\Tperson;
use App\Models\Treport;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class TreportPolicy
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
    public function view(Tperson $tperson, Treport $treport): bool
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
    public function update(Tperson $tperson, Treport $treport): bool
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(Tperson $tperson, Treport $treport): bool
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(Tperson $tperson, Treport $treport): bool
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(Tperson $tperson, Treport $treport): bool
    {
        //
    }
}
