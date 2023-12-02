<?php

namespace Database\Seeders;

use App\Models\Tlog;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Tlog::factory(1700)->create();
    }
}
