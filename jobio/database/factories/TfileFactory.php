<?php

namespace Database\Factories;

use App\Models\Tperson;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tfile>
 */
class TfileFactory extends Factory
{
    public function configure(): static
    {
        return $this->afterCreating(function () {
            dd('created');
        });
    }

    public function definition(): array
    {
        return [
            'tperson_id' => fake()->unique()->uuid(),
            'file_path' => fake()->unique()->words(5, true),
            'url' => fake()->unique()->words(5, true)
        ];
    }
}
