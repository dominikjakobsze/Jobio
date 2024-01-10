<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
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
    public static $template = [
        "title" => null,
        "company_icon" => null,
        "min_salary" => null,
        "max_salary" => null,
        "city" => null,
        "street" => null,
        "zip_code" => null,
        "voivodeship" => null,
        "longitude" => null,
        "latitude" => null,
        "page_offer" => null,
    ];

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

    //scopes
    public function scopeOptions(Builder $query, array $options)
    {
        $query->when(array_key_exists('offer-city', $options), function (Builder $query) use ($options) {
            $query->where(function (Builder $query) use ($options) {
                foreach ($options['offer-city'] as $option) {
                    $query->orWhere(function (Builder $query) use ($option) {
                        $query->where('city', '=', $option);
                    });
                }
            });
        })
            ->when(array_key_exists('offer-min_salary', $options) && array_key_exists('offer-max_salary', $options), function (Builder $query) use ($options) {
                $query->when(ctype_digit($options['offer-min_salary']) && ctype_digit($options['offer-max_salary']), function (Builder $query) use ($options) {
                    $query->where(function (Builder $query) use ($options) {
                        $query->where('min_salary', '>=', (int)$options['offer-min_salary'])->where('max_salary', '<=', (int)$options['offer-max_salary']);
                    });
                });
            })
            ->when(array_key_exists('option-option_type-d', $options), function (Builder $query) use ($options) {
                $query->where(function (Builder $query) use ($options) {
                    $query->whereHas('toftops.toption', function (Builder $query) use ($options) {
                        $query->where(function (Builder $query) use ($options) {
                            foreach ($options['option-option_type-d'] as $option) {
                                $query->orWhere(function (Builder $query) use ($option) {
                                    $query->where('option_type', '=', 'd')->where('option_value', '=', $option);
                                });
                            }
                        });
                    });
                });
            })
            ->when(array_key_exists('option-option_type-s', $options), function (Builder $query) use ($options) {
                $query->where(function (Builder $query) use ($options) {
                    $query->whereHas('toftops.toption', function (Builder $query) use ($options) {
                        $query->where(function (Builder $query) use ($options) {
                            foreach ($options['option-option_type-s'] as $option) {
                                $query->orWhere(function (Builder $query) use ($option) {
                                    $query->where('option_type', '=', 's')->where('option_value', '=', $option);
                                });
                            }
                        });
                    });
                });
            })
            ->when(array_key_exists('option-option_type-t', $options), function (Builder $query) use ($options) {
                $query->where(function (Builder $query) use ($options) {
                    $query->whereHas('toftops.toption', function (Builder $query) use ($options) {
                        $query->where(function (Builder $query) use ($options) {
                            foreach ($options['option-option_type-t'] as $option) {
                                $query->orWhere(function (Builder $query) use ($option) {
                                    $query->where('option_type', '=', 't')->where('option_value', '=', $option);
                                });
                            }
                        });
                    });
                });
            });
    }
}
