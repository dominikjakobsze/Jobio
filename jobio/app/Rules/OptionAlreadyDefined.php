<?php

namespace App\Rules;

use App\Models\Toption;
use App\Services\DatabaseService;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Contracts\Validation\DataAwareRule;
use Illuminate\Support\Facades\DB;

class OptionAlreadyDefined implements ValidationRule, DataAwareRule
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
        $returnedModel = DatabaseService::getOrNotFoundWithTryCatch(
            Toption::where($attribute, '=', $value)
        );
        if (count($returnedModel) > 0) {
            $fail($this->failMessage);
        }
    }
}
