<?php

namespace Database\Factories;

use App\Models\Tperson;
use App\Models\Tresume;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tresume>
 */
class TresumeFactory extends Factory
{
    public function configure(): static
    {
        return $this->afterCreating(function () {
            $uniqueTpersonIds = Tresume::select(['tperson_id', DB::raw('MAX(id) as id')])
                ->groupBy(['tperson_id'])->get()->pluck(['id']);
            Tresume::whereNotIn('id', $uniqueTpersonIds)->forceDelete();
        });
    }
    public function definition(): array
    {
        $tpeople = Tperson::where('role', '=', 'employee')->get();
        if (count($tpeople) === 0) {
            return abort(500, 'no employees!');
        }
        $tpersonId = $tpeople->random()->id;
        Tresume::where('tperson_id', '=', $tpersonId)->forceDelete();
        $templateData = [
            'name' => 'XYZ XYZ',
            'contact' => [
                'phone' => '000-000-000',
                'email' => 'XYZ@xyz.xyz',
            ],
        ];
        return [
            'tperson_id' => $tpersonId,
            'template_data' => json_encode($templateData),
        ];
    }
}
