<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
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
 */
	class Toffer extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Toftop
 *
 * @property string $id
 * @property string $toption_id
 * @property string $toffer_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Toffer $toffer
 * @property-read \App\Models\Toption $toption
 * @method static \Database\Factories\ToftopFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Toftop newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Toftop newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Toftop query()
 * @method static \Illuminate\Database\Eloquent\Builder|Toftop whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Toftop whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Toftop whereTofferId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Toftop whereToptionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Toftop whereUpdatedAt($value)
 */
	class Toftop extends \Eloquent {}
}

namespace App\Models{
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
 */
	class Toption extends \Eloquent {}
}

namespace App\Models{
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
 */
	class Tperson extends \Eloquent implements \Illuminate\Contracts\Auth\Authenticatable, \Illuminate\Contracts\Auth\Access\Authorizable {}
}

namespace App\Models{
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
 */
	class Treport extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\User
 *
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 */
	class User extends \Eloquent {}
}

