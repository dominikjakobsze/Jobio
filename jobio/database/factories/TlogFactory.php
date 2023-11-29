<?php

namespace Database\Factories;

use App\Models\Toffer;
use App\Models\Toftop;
use App\Models\Toption;
use App\Models\Tperson;
use App\Models\Treport;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tlog>
 */
class TlogFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'action_message' => fake()->text(400),
            'action_model' => fake()->randomElement([Tperson::class, Toffer::class, Toption::class, Toftop::class, Treport::class]),
        ];
    }
}
