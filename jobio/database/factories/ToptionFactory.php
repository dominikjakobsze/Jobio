<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Toption>
 */
class ToptionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        /** @var \App\Models\Toption */
        return [
            "option_type" => fake()->randomElement(['T','T','T','D','D','D','D','D','D','D','D','S']),
            "option_value" => fake()->unique()->word(),
        ];
    }
}
