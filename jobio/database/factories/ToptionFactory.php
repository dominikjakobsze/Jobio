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
            $uniqueOptionValues = Toption::select(['option_value', DB::raw('MAX(id) as id')])
                ->groupBy(['option_value'])->get()->pluck(['id'])->toArray();
            Toption::whereNotIn('id', $uniqueOptionValues)->forceDelete();
        });
    }

    public function definition(): array
    {
        $optionType = fake()->randomElement(['S', 'T', 'T', 'D', 'D', 'D', 'D', 'D']);
        $optionValue = implode("", fake()->unique()->words(2, false));
        Toption::where('option_value', '=', $optionValue)->forceDelete();
        return [
            'option_type' => $optionType,
            'option_value' => $optionValue,
        ];
    }
}
