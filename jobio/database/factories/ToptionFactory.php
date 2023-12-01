<?php

namespace Database\Factories;

use App\Models\Toption;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Toption>
 */
class ToptionFactory extends Factory
{
    public function configure(): static
    {
        return $this->afterCreating(function () {
            $toptions = Toption::select(['option_value', DB::raw('MAX(id) as id')])
                ->groupBy('option_value')
                ->havingRaw('COUNT(option_value) > 1')
                ->get()
                ->pluck('id')
                ->flatten()
                ->toArray();
            if (count($toptions) != 0) {
                Toption::whereIn('id', $toptions)->delete();
            }
        });
    }
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $option_value = implode(
            '',
            fake()
                ->unique()
                ->words(2, false),
        );
        Toption::where('option_value', $option_value)->delete();
        return [
            'option_type' => fake()->randomElement(['T', 'T', 'T', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'S']),
            'option_value' => $option_value,
        ];
    }
}
