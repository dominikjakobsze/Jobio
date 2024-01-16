<?php

namespace App\Http\Requests;

use App\Rules\OptionAlreadyDefined;
use App\Traits\CustomFailedValidationTrait;
use App\Traits\TransformValidatedTrait;
use Illuminate\Foundation\Http\FormRequest;

class StorePersonRoleRequest extends FormRequest
{
    use CustomFailedValidationTrait;
    use TransformValidatedTrait;

    protected function passedValidation()
    {
        $this->transformValidated(function ($validatedData, $setData) {
            //dd($validatedData, $setData);
        });
    }

    public function authorize(): bool
    {
        return true;
    }

    public function attributes(): array
    {
        return [
            "role" => "Rola"
        ];
    }

    public function rules(): array
    {
        return [
            "role" => ["required", "in:employer,employee"],
        ];
    }
    public function messages(): array
    {
        return [
            "required" => "Pole :attribute jest wymagane",
            "role.in" => "Pole :attribute musi mieć jedną z wartości: Pracownik, Pracodawca",
        ];
    }
}
