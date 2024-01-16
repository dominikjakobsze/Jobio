<?php

namespace App\Http\Requests;

use App\Rules\OptionAlreadyDefined;
use App\Services\ModelHelperService;
use App\Traits\CustomFailedValidationTrait;
use App\Traits\TransformValidatedTrait;
use Illuminate\Foundation\Http\FormRequest;

class StoreAssignFiltersRequest extends FormRequest
{
    use CustomFailedValidationTrait;
    use TransformValidatedTrait;

    protected function passedValidation()
    {
        $this->transformValidated(function ($validatedData, $setData) {
            $validatedData["toffer_id"] = ModelHelperService::$foundModel?->id;
            $setData($validatedData);
        });
    }

    public function authorize(): bool
    {
        return true;
    }

    public function attributes(): array
    {
        return [
            "option_id" => "Filtr",
        ];
    }

    public function rules(): array
    {
        return [
            "toption_id" => ["required"],
            "toffer_id" => ["nullable"],
        ];
    }
    public function messages(): array
    {
        return [
            "required" => "Pole :attribute jest wymagane",
        ];
    }
}
