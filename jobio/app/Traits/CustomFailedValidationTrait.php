<?php

namespace App\Traits;

use Illuminate\Contracts\Validation\Validator;

trait CustomFailedValidationTrait
{
    protected function failedValidation(Validator $validator)
    {
        return abort(
            code: 409,
            message: json_encode(
                [
                    $validator->getMessageBag()->getMessages()
                ]
            )
        );
    }
}
