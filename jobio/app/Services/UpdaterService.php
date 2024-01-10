<?php

namespace App\Services;

use Exception;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

class UpdaterService
{
    public static function assignValuesToModelWithTryCatch(array|Collection $toAssignArray, Model $model): Model
    {
        try {
            foreach ($toAssignArray as $key => $value) {
                $model->$key = $value;
            }
            dd($model->getAttributes());
            return $model;
        } catch (Exception $exception) {
            return abort(500, 'Nie udało się przypisać wartości');
        }
    }
}
