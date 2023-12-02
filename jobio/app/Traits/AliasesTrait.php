<?php

namespace App\Traits;

use App\Models\Toption;

trait AliasesTrait {
    public static $aliases = [
        "option" => Toption::class
    ];
    public function findByKey(){
        dd(self::$aliases);
    }
}