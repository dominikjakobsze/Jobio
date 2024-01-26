<?php

namespace App\Traits;

use App\Models\Toffer;
use App\Models\Toption;

trait AliasesTrait {
    public static $aliases = [
        "option" => Toption::class,
        "offer" => Toffer::class
    ];
    public function findByKey(){
        dd(self::$aliases);
    }
}