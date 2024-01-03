<?php

namespace App\Services;

use Exception;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;

class ImageUploadService
{
    protected static $allowedExtensions = [
        'image/jpeg' => 'jpg',
        'image/png' => 'png'
    ];
    public static function getAllowedExtensions()
    {
        return self::$allowedExtensions;
    }
    protected static function makeUniqueFilename($extension)
    {
        return 'image_' . date_timestamp_get(now()) . '_' . uniqid() . '.' . $extension;
    }
    public static function saveImage(UploadedFile $file)
    {
        if (!$file->getMimeType()) {
            return abort(500, 'MimeType Is Undefined');
        }
        if (!array_key_exists($file->getMimeType(), self::$allowedExtensions)) {
            return abort(500, 'MimeType Is Not Allowed');
        }
        $fileName = self::makeUniqueFilename(
            extension: self::$allowedExtensions[$file->getMimeType()]
        );
        if (file_get_contents($file->path()) === false) {
            return abort(500, 'File cannot be processed');
        }
        Storage::disk('local')->put(
            '/app/app_files/images/' . $fileName,
            file_get_contents($file->path())
        );
        $url = '/endpoint/image/images-' . $fileName;
        $filePath = 'images/' . $fileName;
        return [
            'url' => $url,
            'filePath' => $filePath,
        ];
    }
}
