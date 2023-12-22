<?php

namespace App\Services;

class ImageGeneratorService
{
    protected static $allowedExtensions = [
        'image/jpeg' => 'jpg',
        'image/png' => 'png'
    ];
    public static function setAllowedExtensions($allowedExtensions)
    {
        self::$allowedExtensions = $allowedExtensions;
    }
    public static function getAllowedExtensions()
    {
        return self::$allowedExtensions;
    }
    protected static function randomUrl()
    {
        return 'https://picsum.photos/' . random_int(270, 800) . '/' . random_int(270, 800);
    }
    protected static function makeUniqueFilename($extension)
    {
        return 'image_' . date_timestamp_get(now()) . '_' . uniqid() . '.' . $extension;
    }
    public static function generateImage()
    {
        dd(self::$allowedExtensions, self::randomUrl(), self::makeUniqueFilename('png'));
    }
}
