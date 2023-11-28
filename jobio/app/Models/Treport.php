<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Treport
 *
 * @property string $id
 * @property string $message
 * @property string $resource_id
 * @property string $resource_model
 * @property string $link_source
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Toffer $toffer
 * @method static \Database\Factories\TreportFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Treport newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Treport newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Treport query()
 * @method static \Illuminate\Database\Eloquent\Builder|Treport whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Treport whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Treport whereLinkSource($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Treport whereMessage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Treport whereResourceId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Treport whereResourceModel($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Treport whereUpdatedAt($value)
 * @mixin \Eloquent
 */
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

    public function toffer(){
        return $this->belongsTo(Toffer::class,'resource_id','id');
    }
}
