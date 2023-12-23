<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable as AuthenticatableTrait;
use Illuminate\Contracts\Auth\Access\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\Access\Authorizable as AuthorizableTrait;

/**
 * @property string id uuid PK AutoSet
 * @property string email Unique
 * @property string otp Unique Nullable [made with Hash::make()]
 * @property string folder Unique
 * @property string role [support,employer,employee]
 */
class Tperson extends Model implements Authenticatable, Authorizable
{
    use HasFactory;
    use HasUuids;
    use AuthenticatableTrait {
        getAuthPassword as getAuthPasswordTrait;
    }
    use AuthorizableTrait;

    protected $table = 'tpeople';
    protected $primaryKey = 'id';
    protected $casts = [];
    protected $guarded = ['id'];
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = true;

    public function toffers()
    {
        return $this->hasMany(Toffer::class, 'temployer_id', 'id');
    }
    public function tlogs()
    {
        return $this->hasMany(Tlog::class, 'tperson_id', 'id');
    }
    public function tfiles()
    {
        return $this->hasMany(Tfile::class, 'tperson_id', 'id');
    }
    public function getAuthPassword()
    {
        return $this->otp;
    }
}
