<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Contracts\Validation\DataAwareRule;
use Illuminate\Contracts\Validation\ValidatorAwareRule;
use Illuminate\Support\Arr;
use Illuminate\Validation\Validator;

class OneOfFieldsMustBePresentButNotBoth implements ValidationRule, DataAwareRule, ValidatorAwareRule
{
    public $implicit = true; //makes it run even if field is not present in input data, when false it only runs when field is present in input data

    public function __construct(public string $conflictFieldName)
    {
    }

    protected $validator;

    public function setValidator(Validator $validator): static
    {
        $this->validator = $validator;

        return $this;
    }

    protected $data = [];

    public function setData(array $data): static
    {
        $this->data = $data;

        return $this;
    }

    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $mainFieldPresent = Arr::has($this->data, $attribute);
        $conflictFieldPresent = Arr::has($this->data, $this->conflictFieldName);
        if ($mainFieldPresent === true && $conflictFieldPresent === true) {
            $fail("Pole: :attribute nie może występować razem z polem: " . Arr::get($this->validator->customAttributes, $this->conflictFieldName));
        }
        if ($mainFieldPresent === false && $conflictFieldPresent === false) {
            $fail("Jedno z pól: :attribute lub " . Arr::get($this->validator->customAttributes, $this->conflictFieldName) . " musi być obecne w formularzu");
        }
    }
}
