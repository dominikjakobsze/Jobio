<?php

namespace Database\Seeders;

use App\Models\Toftop;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ToftopSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Toftop::factory(800)->create();
    }
}
