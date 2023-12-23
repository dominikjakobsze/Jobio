<?php

namespace Database\Factories;

use App\Models\Tperson;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tfile>
 */
class TfileFactory extends Factory
{
    public function definition(): array
    {
        dd(Tperson::where('role','=','employer')->get());
        return [
            'tperson_id' => null,
            'file_path' => null,
            'url' => null
        ];
    }
}
