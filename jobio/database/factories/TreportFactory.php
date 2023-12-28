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
        });
    }
    public function definition(): array
    {
        return [
            "message" => null,
            "resource_id" => null,
            "resource_model" => null,
            "link_source" => null,
        ];
    }
}
