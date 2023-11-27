<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Treport extends Model
{
    use HasFactory;
    use HasUuids;

    protected $table = 'treports';
    protected $primaryKey = 'id';
    protected $casts = [];
    protected $guarded = ['id'];
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = true;
}
