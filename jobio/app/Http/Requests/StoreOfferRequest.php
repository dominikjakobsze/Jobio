<?php

namespace App\Http\Requests;

use App\Rules\GreaterThanField;
use App\Traits\CustomFailedValidationTrait;
use App\Traits\CustomPassedValidationTrait;
use App\Traits\TransformValidatedTrait;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class StoreOfferRequest extends FormRequest
{
    use CustomFailedValidationTrait;
    use TransformValidatedTrait;

    protected function passedValidation()
    {
        $this->transformValidated(function ($validatedData, $setData) {
            $validatedData['page_offer'] = json_encode(
                [
                    'page' => $validatedData['page_offer'],
                ],
            );
            $validatedData['temployer_id'] = (string)Auth::guard('person')?->user()?->id;
            $validatedData['min_salary'] = (int)$validatedData['min_salary'];
            $validatedData['max_salary'] = (int)$validatedData['max_salary'];
            $validatedData['longitude'] = (float)$validatedData['longitude'];
            $validatedData['latitude'] = (float)$validatedData['latitude'];
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
            "title" => 'Tytuł ogłoszenia',
            "company_icon" => 'Zdjęcie ogłoszenia',
            "min_salary" => 'Minimalna pensja',
            "max_salary" => 'Maksymalna pensja',
            "city" => 'Miasto',
            "street" => 'Ulica',
            "zip_code" => 'Kod pocztowy',
            "voivodeship" => 'Województwo',
            "page_offer" => 'Kreator treści',
        ];
    }

    public function rules(): array
    {
        return [
            "title" => ['required', 'string'],
            "company_icon" => ['required', 'string'],
            "min_salary" => ['required', 'integer'],
            "max_salary" => [
                'required', 'integer', new GreaterThanField(
                    fieldName: 'min_salary',
                    failMessage: 'Pole Minimalna pensja nie może mieć większej wartości niź pole Maksymalna pensja'
                )
            ],
            "city" => ['required', 'string'],
            "street" => ['required', 'string'],
            "zip_code" => ['required', 'string'],
            "voivodeship" => ['required', 'string'],
            "longitude" => ['required', 'numeric'],
            "latitude" => ['required', 'numeric'],
            "page_offer" => ['required', 'string'],
            //these fields are not sent with form fields but they are needed in passedValidation()
            "temployer_id" => ['nullable'],
        ];
    }
    public function messages(): array
    {
        return [
            'required' => 'Pole :attribute jest wymagane!',
            'string' => 'Pole :attribute musi być tekstem!',
            'numeric' => 'Pole :attribute musi być liczbą!',
            'integer' => 'Pole :attribute musi być liczbą',
        ];
    }
}
