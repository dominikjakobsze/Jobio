<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
/**
 * @property string id uuid PK AutoSet
 * @property string message
 * @property string resource_id uuid FK SetViaRelationship
 * @property string resource_model [Model namespace related to report]
 * @property string link_source [Link to reported offer]
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
