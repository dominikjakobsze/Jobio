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
 * App\Models\Tperson
 *
 * @property string $id
 * @property string $email
 * @property string $otp
 * @property string $folder
 * @property string $role
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Toffer> $toffers
 * @property-read int|null $toffers_count
 * @method static \Database\Factories\TpersonFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Tperson newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Tperson newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Tperson query()
 * @method static \Illuminate\Database\Eloquent\Builder|Tperson whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Tperson whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Tperson whereFolder($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Tperson whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Tperson whereOtp($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Tperson whereRole($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Tperson whereUpdatedAt($value)
 * @mixin \Eloquent
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
    public function getAuthPassword()
    {
        return $this->otp;
    }
}
