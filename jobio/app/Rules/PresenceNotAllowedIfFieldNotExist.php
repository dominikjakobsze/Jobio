<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Contracts\Validation\DataAwareRule;
use Illuminate\Support\Arr;

class PresenceNotAllowedIfFieldNotExist implements ValidationRule, DataAwareRule
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
        collect($this->mustExistFields)->each(function ($value, $key) use (&$fail, &$attribute) {
            if ((bool)Arr::has($this->data, $value) === false) {
                $fail("Pole: " . $value . " nie istnieje, więc przełanie pola: " . $attribute . " jest niedozwolone");
            }
        });
    }
}
