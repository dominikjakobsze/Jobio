<?php

namespace Database\Seeders;

use App\Models\Toffer;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TofferSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Toffer::factory(20)->create();
    }
}
