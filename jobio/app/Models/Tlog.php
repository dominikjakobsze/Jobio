<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tlog extends Model
{
    use HasFactory;
    use HasUuids;

    protected $table = 'tlogs';
    protected $primaryKey = 'id';
    protected $casts = [];
    protected $guarded = ['id'];
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = true;

    public function tpeople()
    {
        return $this->belongsTo(Tperson::class, 'tperson_id', 'id');
    }
}
