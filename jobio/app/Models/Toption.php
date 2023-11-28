<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Toption
 *
 * @property string $id
 * @property string $option_type
 * @property string $option_value
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Toftop> $toftops
 * @property-read int|null $toftops_count
 * @method static \Database\Factories\ToptionFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Toption newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Toption newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Toption query()
 * @method static \Illuminate\Database\Eloquent\Builder|Toption whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Toption whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Toption whereOptionType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Toption whereOptionValue($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Toption whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Toption extends Model
{
    use HasFactory;
    use HasUuids;

    protected $table = 'toptions';
    protected $primaryKey = 'id';
    protected $casts = [];
    protected $guarded = ['id'];
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = true;

    public function toftops(){
        return $this->hasMany(Toftop::class,'toption_id','id');
    }
}
