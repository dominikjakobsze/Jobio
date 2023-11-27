<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tperson extends Model
{
    use HasFactory;
    use HasUuids;

    protected $table = 'tpeople';
    protected $primaryKey = 'id';
    protected $casts = [];
    protected $guarded = ['id'];
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = true;

    public function toffers(){
        return $this->hasMany(Toffer::class,'temployer_id','id');
    }
}
