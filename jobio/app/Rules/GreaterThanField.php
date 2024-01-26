<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Contracts\Validation\DataAwareRule;

class GreaterThanField implements ValidationRule, DataAwareRule
{
    public function __construct(private string $fieldName, private string $failMessage)
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
        if ($value <= $this->data[$this->fieldName]) {
            $fail($this->failMessage);
        }
    }
}
