<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Toffer
 *
 * @property string $id
 * @property int $min_salary
 * @property int $max_salary
 * @property string $title
 * @property string $page_offer
 * @property float $longitude
 * @property float $latitude
 * @property string $city
 * @property string $street
 * @property string $zip_code
 * @property string $voivodeship
 * @property string $temployer_id
 * @property string $company_icon
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Toftop> $toftops
 * @property-read int|null $toftops_count
 * @property-read \App\Models\Tperson $tperson
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Treport> $treports
 * @property-read int|null $treports_count
 * @method static \Database\Factories\TofferFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Toffer newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Toffer newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Toffer query()
 * @method static \Illuminate\Database\Eloquent\Builder|Toffer whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Toffer whereCompanyIcon($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Toffer whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Toffer whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Toffer whereLatitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Toffer whereLongitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Toffer whereMaxSalary($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Toffer whereMinSalary($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Toffer wherePageOffer($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Toffer whereStreet($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Toffer whereTemployerId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Toffer whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Toffer whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Toffer whereVoivodeship($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Toffer whereZipCode($value)
 * @mixin \Eloquent
 */
class Toffer extends Model
{
    use HasFactory;
    use HasUuids;

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
}
