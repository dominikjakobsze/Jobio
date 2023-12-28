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
        });
    }

    public function definition(): array
    {
        return [
            'option_type' => null,
            'option_value' => null,
        ];
    }
}
