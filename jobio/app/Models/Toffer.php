<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property string id uuid PK AutoSet
 * @property int min_salary
 * @property int max_salary
 * @property string title
 * @property string page_offer stringifiedJSON [HTML output of PageBuilder]
 * @property double longitude
 * @property double latitude
 * @property string city
 * @property string street
 * @property string zip_code
 * @property string voivodeship
 * @property string temployer_id uuid FK SetViaRelationship [Only role employer allowed]
 * @property string company_icon [Path to icon]
 */
class Toffer extends Model
{
    use HasFactory;
    use HasUuids;
    use SoftDeletes;

    protected $table = 'toffers';
    protected $primaryKey = 'id';
    protected $casts = [];
    protected $guarded = ['id'];
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = true;
    protected $dateFormat = 'Y-m-d H:i:s';

    public function tperson()
    {
        return $this->belongsTo(Tperson::class, 'temployer_id', 'id');
    }
    public function treports()
    {
        return $this->hasMany(Treport::class, 'resource_id', 'id');
    }
    public function toftops()
    {
        return $this->hasMany(Toftop::class, 'toffer_id', 'id');
    }
    public function tretofs()
    {
        return $this->hasMany(Tretof::class, 'toffer_id', 'id');
    }
}
