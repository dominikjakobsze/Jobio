<?php

namespace App\Http\Middleware;

use App\Services\ModelHelperService;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckIfModelExists
{
    public function handle(Request $request, Closure $next, string $model): Response
    {
        $id = $request?->route('id') ?? null;
        if ($id === null) {
            return abort(404, "Takie ID nie istnieje");
        }
        ModelHelperService::$foundModel = ModelHelperService::findModel($model, $id);
        return $next($request);
    }
}
