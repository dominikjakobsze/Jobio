<?php

namespace App\Http\Requests;

use App\Rules\OptionAlreadyDefined;
use App\Traits\CustomFailedValidationTrait;
use App\Traits\TransformValidatedTrait;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Arr;

class StoreResumeRequest extends FormRequest
{
    use CustomFailedValidationTrait;
    use TransformValidatedTrait;

    protected function passedValidation()
    {
        $this->transformValidated(function ($validatedData, $setData) {
            //dd($validatedData, $setData);
            //$setData will only set such key => value pairs that got defined in rules(),
            //let's say, if you add in rules() "test" and then you will try to set "test" and "test2" here
            //you will only see "test" key => value when you call ->validated(), "test2" will not be present
            //because it didn't get defined in rules()

            if (Arr::has($validatedData, "blocks") === true) {
                collect(Arr::get($validatedData, "blocks"))
                    ->keys()
                    ->each(function ($item, $key) use (&$validatedData) {
                        if (Arr::has($validatedData, "blocks." . $item) === true) {
                            Arr::set(
                                $validatedData,
                                "blocks." . $item,
                                collect(Arr::get($validatedData, "blocks." . $item))->values()->toArray()
                            );
                        }
                    });
                $setData($validatedData);
            }
        });
    }

    public function authorize(): bool
    {
        return true;
    }

    public function attributes(): array
    {
        return [
            "name" => "Pole Imię i Nazwisko",
            "address" => "Pole Adres",
            "contact" => "Pole Kontakt",
            "summary" => "Pole Podsumowanie",
            "skills" => "Pole Umiejętności",
        ];
    }

    public function rules(): array
    {
        // nullable: The field may be null. If it is null, then other validatin rules are skipped
        // filled: The field must not be empty (null, empty string, empty array).
        // present: The field must exist in the input data but can be null or empty.
        // sometimes: The field can be present in the input data, but it doesn't have to be (the field is optional). If the field is present, then the associated validation rules should be applied
        // present_with: The field under validation must be present in the input data if any of the other specified fields are also present. In other words, the field becomes required only if any of the specified fields are present; otherwise, it is (The field) considered optional.
        // it is forbidden to mix the present (and its variations) with sometimes and vice versa
        return [
            "name" => ["present", "filled", "regex:/^[a-zA-Z\s]+$/"],
            "address" => ["present", "filled", "string"],
            "contact" => ["present", "filled", "string"],
            "summary" => ["sometimes", "nullable", "string"],
            "skills" => ["sometimes", "nullable", "string"],
            "blocks" => ["sometimes", "filled", "array"],
        ];
    }
    public function messages(): array
    {
        return [
            "filled" => ":attribute jest wymagane",
            "present" => ":attribute jest wymagane",
            "name.regex" => ":attribute może zawierać jedynie litery alfabetu",
            "string" => ":attribute musi być tekstem",
            "array" => "Coś jest nie tak z :attribute",
        ];
    }
}
