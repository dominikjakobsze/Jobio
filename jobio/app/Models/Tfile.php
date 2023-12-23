<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property string id uuid PK AutoSet
 * @property string tperson_id uuid FK SetViaRelationship
 * @property string file_path text unique
 * @property string url text unique
 */
class Tfile extends Model
{
    use HasFactory;
    use HasUuids;

    protected $table = 'tfiles';
    protected $primaryKey = 'id';
    protected $casts = [];
    protected $guarded = ['id'];
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = true;

    public function tpeople(): BelongsTo
    {
        return $this->belongsTo(Tperson::class, 'tperson_id', 'id');
    }
}
