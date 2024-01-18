<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Contracts\Validation\DataAwareRule;
use Illuminate\Support\Arr;

class MustBePresentIfFieldExistsOtherwisePresenceNotAllowed implements ValidationRule, DataAwareRule
{
    public function __construct(public array $mustExistFields)
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
        dd($value, $attribute, $this->data, $this->mustExistFields);
    }
}
