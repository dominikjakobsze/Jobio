<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\tretof>
 */
class TretofFactory extends Factory
{
    public function configure(): static
    {
        return $this->afterCreating(function () {
        });
    }
    public function definition(): array
    {
        return [
            'toffer_id' => null,
            'tresume_id' => null,
        ];
    }
}
