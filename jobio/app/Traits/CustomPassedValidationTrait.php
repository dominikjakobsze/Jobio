<?php

namespace App\Traits;

trait CustomPassedValidationTrait
{
    protected function passedValidation()
    {
        $validatedData = $this->validated();
        $validatedData['page_offer'] = "test";
        /** @disregard - Ignores intelephense errors only in next line! */
        $this->validator->setData($validatedData);
        dd($this->validator->getData());
    }
}
