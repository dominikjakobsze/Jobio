<?php

namespace App\Traits;

use Closure;

trait TransformValidatedTrait
{
    protected function transformValidated(Closure $closure)
    {
        //[$this->validator, 'setData'] -> callable from array [$this->validator, 'setData']() in this case [$this->validator, 'setData']([]) { setData expects one argument of type array, so I pass [] }
        $closure($this->validated(), [$this->validator, 'setData']);
    }
}

// USE CASE Example => we need to use "use ($test)" to access $test inside Closure / Callback
// $test = 0;
// $this->transformValidated(function ($validatedData, $setData) use ($test) {
//     dd($validatedData, $setData, $test);
// });
//
// /** @disregard - Ignores intelephense errors only in next line! */
// dd($this->validator->getData());
