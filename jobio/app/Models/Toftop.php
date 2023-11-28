<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Toftop
 *
 * @property string $id
 * @property string $toption_id
 * @property string $toffer_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Toffer $toffer
 * @property-read \App\Models\Toption $toption
 * @method static \Database\Factories\ToftopFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Toftop newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Toftop newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Toftop query()
 * @method static \Illuminate\Database\Eloquent\Builder|Toftop whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Toftop whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Toftop whereTofferId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Toftop whereToptionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Toftop whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Toftop extends Model
{
    use HasFactory;
    use HasUuids;

    protected $table = 'toftops';
    protected $primaryKey = 'id';
    protected $casts = [];
    protected $guarded = ['id'];
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = true;
    protected $dateFormat = 'Y-m-d H:i:s';

    public function toption()
    {
        return $this->belongsTo(Toption::class, 'toption_id', 'id');
    }
    public function toffer()
    {
        return $this->belongsTo(Toffer::class, 'toffer_id', 'id');
    }
}
