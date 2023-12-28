<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tretof extends Model
{
    use HasFactory;
    use HasUuids;
    use SoftDeletes;

    protected $table = 'tretofs';
    protected $primaryKey = 'id';
    protected $casts = [];
    protected $guarded = ['id'];
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = true;

    public function toffer(): BelongsTo
    {
        return $this->belongsTo(Toffer::class, 'toffer_id', 'id');
    }

    public function tresume(): BelongsTo
    {
        return $this->belongsTo(Tresume::class, 'tresume_id', 'id');
    }
}
