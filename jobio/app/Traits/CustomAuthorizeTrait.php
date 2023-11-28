<?php

namespace App\Traits;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\Auth;

trait CustomAuthorizeTrait
{
    use AuthorizesRequests;
    public function permit(string $ability, string|array $arguments)
    {
        $this->authorizeForUser(
            user: Auth::guard('person')->user(),
            ability: $ability,
            arguments: $arguments
        );
    }
}
