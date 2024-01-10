<?php

namespace App\Services;

class DifferentiationService
{
    private static $templateCollection;
    private static $toCheckCollection;

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
