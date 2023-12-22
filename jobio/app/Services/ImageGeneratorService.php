<?php

namespace App\Services;

use Exception;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;

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
        try {
            $result = Http::get(self::randomUrl());
        } catch (Exception $exception) {
            return abort(code: '500', message: 'Fetch Failed - Image.Generator.Service', headers: []);
        }
        if ($result->successful()) {
            Storage::disk('local')->put(
                '/app/app_files/images/' . self::makeUniqueFilename(
                    extension: self::$allowedExtensions[$result->header('Content-Type')] ?? 'jpg'
                ),
                $result->body()
            );
        } else {
            return abort(code: '500', message: 'Fetch Failed - Image.Generator.Service', headers: []);
        }
    }
}
