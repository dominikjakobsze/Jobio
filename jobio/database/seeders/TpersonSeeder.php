<?php

namespace Database\Seeders;

use App\Models\Tperson;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TpersonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Tperson::factory(120)->create();
    }
}
