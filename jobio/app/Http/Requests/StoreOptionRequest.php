<?php

namespace App\Http\Requests;

use App\Rules\OptionAlreadyDefined;
use App\Traits\CustomFailedValidationTrait;
use App\Traits\TransformValidatedTrait;
use Illuminate\Foundation\Http\FormRequest;

class StoreOptionRequest extends FormRequest
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
            "option_type" => "Typ filtru",
            "option_value" => "Nazwa filtru"
        ];
    }

    public function rules(): array
    {
        return [
            "option_type" => ["required", "in:S,D,T"],
            "option_value" => ["required", new OptionAlreadyDefined(
                fieldName: "",
                failMessage: "Taka wartość filtru już istnieje"
            )],
        ];
    }
    public function messages(): array
    {
        return [
            "required" => "Pole :attribute jest wymagane",
            "option_type.in" => "Pole :attribute musi mieć jedną z wartości: S, D, T",
        ];
    }
}
