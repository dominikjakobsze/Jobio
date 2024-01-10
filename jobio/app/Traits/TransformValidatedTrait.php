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
