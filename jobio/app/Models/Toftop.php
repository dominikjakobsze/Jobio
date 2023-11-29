<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
/**
 * @property string id uuid PK AutoSet
 * @property string toption_id uuid FK SetViaRelationship
 * @property string toffer_id uuid FK SetViaRelationship
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
