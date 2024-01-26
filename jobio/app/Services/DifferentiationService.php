<?php

namespace App\Services;

use Illuminate\Support\Collection;

class DifferentiationService
{
    private static Collection $templateCollection;
    private static Collection $toCheckCollection;

    private static function excludeFieldsThatAreNotInTemplateCollection()
    {
        $difference = self::$toCheckCollection->diffKeys(self::$templateCollection);
        self::$toCheckCollection = self::$toCheckCollection->except($difference->keys());
        return self::$toCheckCollection;
    }

    public static function findDifferences($templateArray, $toCheckArray)
    {
        self::$templateCollection = collect($templateArray);
        self::$toCheckCollection = collect($toCheckArray);

        return self::excludeFieldsThatAreNotInTemplateCollection();
    }
}
