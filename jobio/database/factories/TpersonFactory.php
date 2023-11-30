<?php

namespace Database\Factories;

use App\Models\Tperson;
use Hash;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tperson>
 */
class TpersonFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'email' => fake()
                ->unique()
                ->email(),
            'otp' => fake()->numberBetween(0, 10) > 7 ? Hash::make('12345678') : null,
            'folder' => implode(
                '',
                fake()
                    ->unique()
                    ->words(4),
            ),
            'role' => fake()->randomElement(['support', 'employer', 'employer', 'employer', 'employee', 'employee', 'employee', 'employee', 'employee', 'employee', 'employee', 'employee', 'employee', 'employee', 'employee', 'employee', 'employee']),
        ];
    }
}
