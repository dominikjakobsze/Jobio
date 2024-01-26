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
        });
    }

    public function definition(): array
    {
        return [
            'toption_id' => null,
            'toffer_id' => null,
        ];
    }
}
