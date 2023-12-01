<?php

namespace Database\Factories;

use App\Models\Toffer;
use App\Models\Toftop;
use App\Models\Toption;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Toftop>
 */
class ToftopFactory extends Factory
{
    public function configure(): static
    {
        return $this->afterCreating(function () {
            $arrayOfUniqueIds = Toftop::select('toption_id', 'toffer_id', DB::raw('MAX(id) as id'))
                ->groupBy('toption_id', 'toffer_id')
                ->get()
                ->pluck('id')
                ->flatten()
                ->toArray();
            Toftop::whereNotIn('id',$arrayOfUniqueIds)->delete();
        });
    }
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $toptions = Toption::get();
        $toptions = $toptions->toArray();
        if (count($toptions) == 0) {
            abort(500, 'there is no option that can be assigned');
        }
        $toffers = Toffer::get();
        $toffers = $toffers->toArray();
        if (count($toffers) == 0) {
            abort(500, 'there is no offer that can be assigned');
        }
        $toffer = fake()->randomElement($toffers);
        $toption = fake()->randomElement($toptions);
        Toftop::where('toffer_id', $toffer['id'])->where('toption_id',$toption['id'])->delete();
        return [
            'toption_id' => $toption['id'],
            'toffer_id' => $toffer['id'],
        ];
    }
}
