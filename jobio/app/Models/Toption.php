<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property string id uuid PK AutoSet
 * @property string option_type [T,D,S]
 * @property string option_value Unique
 */
class Toption extends Model
{
    use HasFactory;
    use HasUuids;
    use SoftDeletes;

    protected $table = 'toptions';
    protected $primaryKey = 'id';
    protected $casts = [];
    protected $guarded = ['id'];
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = true;
    protected $dateFormat = 'Y-m-d H:i:s';

    public static $template = [
        "option_type" => null,
        "option_value" => null
    ];

    public function toftops()
    {
        return $this->hasMany(Toftop::class, 'toption_id', 'id');
    }
}
