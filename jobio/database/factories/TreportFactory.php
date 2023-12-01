<?php

namespace Database\Factories;

use App\Models\Toffer;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Treport>
 */
class TreportFactory extends Factory
{
    public function configure(): static
    {
        return $this->afterCreating(function () {
            dd('creating');
        });
    }
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $toffers = Toffer::get();
        if(count($toffers) == 0){
            abort(500,"there is no offer that can be assigned");
        }
        $message = fake()->sentence(57);
        return [
            "message" => $message,
            "resource_id" => fake()->randomElement($toffers)['id'],
            "resource_model" => Toffer::class,
            "link_source" => fake()->url(),
        ];
    }
}
