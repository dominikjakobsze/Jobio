<?php

namespace App\Services;

class ModelHelperService
{
    public static $foundModel = null;
    public static function findModel(string $model, string $id)
    {
        return DatabaseService::firstOrNotFoundWithTryCatch($model::where('id', '=', $id));
    }
}
