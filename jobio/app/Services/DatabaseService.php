<?php

namespace App\Services;

use Exception;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Symfony\Component\HttpKernel\Exception\HttpException;

class DatabaseService
{
    public static function saveWithTryCatch(Model $model)
    {
        try {
            $model->save();
            return true;
        } catch (Exception $exception) {
            dd($exception);
            return abort(500, 'Problem z zapisem do bazy danych');
        }
    }
    public static function deleteWithTryCatch(Model $model)
    {
        try {
            $model->delete();
            return true;
        } catch (Exception $exception) {
            return abort(500, 'Problem z usunięciem rekordu');
        }
    }
    public static function forceDeleteWithTryCatch(Model $model)
    {
        try {
            $model->forceDelete();
            return true;
        } catch (Exception $exception) {
            return abort(500, 'Problem z usunięciem rekordu');
        }
    }
    public static function forceDeleteQueryWithTryCatch(Builder $builder)
    {
        try {
            $builder->forceDelete();
            return true;
        } catch (Exception $exception) {
            return abort(500, 'Problem z usunięciem rekordu');
        }
    }
    public static function firstOrNotFoundWithTryCatch(Builder $builder)
    {
        try {
            $model = $builder->first();
            if ($model === null) {
                return abort(404, 'Brak rekordu');
            }
            return $model;
        } catch (HttpException $exception) {
            return abort($exception?->getStatusCode(), $exception?->getMessage());
        } catch (Exception $exception) {
            return abort(500, 'Problem z wyciągnięciem rekordu');
        }
    }
    public static function getOrNotFoundWithTryCatch(Builder $builder)
    {
        try {
            $model = $builder->get();
            if ($model === null) {
                return abort(404, 'Brak rekordu');
            }
            return $model;
        } catch (HttpException $exception) {
            return abort($exception?->getStatusCode(), $exception?->getMessage());
        } catch (Exception $exception) {
            return abort(500, 'Problem z wyciągnięciem rekordu');
        }
    }
}
