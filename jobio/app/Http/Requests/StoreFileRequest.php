<?php

namespace App\Http\Requests;

use App\Rules\OptionAlreadyDefined;
use App\Traits\CustomFailedValidationTrait;
use App\Traits\TransformValidatedTrait;
use Illuminate\Foundation\Http\FormRequest;

class StoreFileRequest extends FormRequest
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
            "fileMenager" => "Plik",
        ];
    }

    public function rules(): array
    {
        return [
            "fileMenager" => ["required", "image"],
        ];
    }
    public function messages(): array
    {
        return [
            "required" => "Nie przesłano pliku",
            "image" => ":attribute nie jest zdjęciem"
        ];
    }
}
