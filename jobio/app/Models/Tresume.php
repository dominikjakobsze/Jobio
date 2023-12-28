<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tresume extends Model
{
    use HasFactory;
    use HasUuids;
    use SoftDeletes;

    protected $table = 'tresumes';
    protected $primaryKey = 'id';
    protected $casts = [];
    protected $guarded = ['id'];
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = true;
    protected $dateFormat = 'Y-m-d H:i:s';

    public function tperson(): BelongsTo
    {
        return $this->belongsTo(Tperson::class, 'tperson_id', 'id');
    }
    public function tretofs()
    {
        return $this->hasMany(Tretof::class, 'tresume_id', 'id');
    }
}
