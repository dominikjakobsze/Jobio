<?php

namespace Database\Factories;

use App\Models\Tperson;
use App\Models\Tresume;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tresume>
 */
class TresumeFactory extends Factory
{
    protected array $uniquePeople = [];

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
            Tresume::whereNotNull('id')->forceDelete();
            return abort(500, 'no employees!');
        }
        $totalTries = 0;
        do {
            if ($totalTries >= count($tpeople)) {
                Tresume::whereNotNull('id')->forceDelete();
                return abort(500, 'number of tries higher than number of employees!');
            }
            $tpersonId = $tpeople->random()->id;
            if (!isset($this->uniquePeople[$tpersonId])) {
                $this->uniquePeople[$tpersonId] = $tpersonId;
                break;
            }
            $totalTries++;
        } while (true);
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
