<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tresume>
 */
class TresumeFactory extends Factory
{
    public function configure(): static
    {
        return $this->afterCreating(function () {
        });
    }
    public function definition(): array
    {
        return [
            'tperson_id' => null,
            'template_data' => null
        ];
    }
}
