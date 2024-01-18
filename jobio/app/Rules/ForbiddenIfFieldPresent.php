<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Contracts\Validation\DataAwareRule;
use Illuminate\Support\Arr;

class ForbiddenIfFieldPresent implements ValidationRule, DataAwareRule
{
    public function __construct(public array $forbiddenFields)
    {
    }

    protected $data = [];

    public function setData(array $data): static
    {
        $this->data = $data;

        return $this;
    }

    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        collect($this->forbiddenFields)->each(function ($value, $key) use (&$fail, &$attribute) {
            if ((bool)Arr::has($this->data, $value) === true) {
                $fail("W formularzu obecne jest pole: " . $value . ", które nie powinno być ponieważ istnieje pole: " . $attribute);
            }
        });
    }
}
