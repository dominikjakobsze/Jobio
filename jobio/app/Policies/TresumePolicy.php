<?php

namespace App\Policies;

use App\Models\Tperson;
use App\Models\Tresume;
use Illuminate\Auth\Access\Response;

class TresumePolicy
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
    public function view(Tperson $tperson, Tresume $tresume): bool
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
    public function update(Tperson $tperson, Tresume $tresume): bool
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(Tperson $tperson, Tresume $tresume): bool
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(Tperson $tperson, Tresume $tresume): bool
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(Tperson $tperson, Tresume $tresume): bool
    {
        //
    }
}
