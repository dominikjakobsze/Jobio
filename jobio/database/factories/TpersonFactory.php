<?php

namespace Database\Factories;

use App\Models\Tperson;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Env;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tperson>
 */
class TpersonFactory extends Factory
{
    public function configure(): static
    {
        return $this->afterCreating(function () {
            $emails = Tperson::select(['email', DB::raw("MAX(id) as id")])
                ->groupBy(['email'])
                ->havingRaw('COUNT(*) > 1')
                ->get()
                ->pluck(['email']);
            Tperson::whereIn('email', $emails)->forceDelete();
            $folders = Tperson::select(['folder', DB::raw("MAX(id) as id")])
                ->groupBy(['folder'])
                ->havingRaw('COUNT(*) > 1')
                ->get()
                ->pluck(['folder']);
            Tperson::whereIn('folder', $folders)->forceDelete();
            $otps = Tperson::select(['otp', DB::raw("MAX(id) as id")])
                ->groupBy(['otp'])
                ->havingRaw('COUNT(*) > 1')
                ->get()
                ->pluck(['otp']);
            Tperson::whereIn('otp', $otps)->forceDelete();
        });
    }
    public function definition(): array
    {
        $email = fake()->unique()->email();
        Tperson::where('email', '=', $email)->forceDelete();
        $folder = implode("", fake()->unique()->words(4));
        Tperson::where('folder', '=', $folder)->forceDelete();
        $role = fake()->randomElement(['support', 'employer', 'employer', 'employee', 'employee', 'employee', 'employee', 'employee', 'employee']);
        $otp = Hash::make(implode("", fake()->unique()->words(4)));
        Tperson::where('otp', '=', $otp)->forceDelete();
        return [
            'email' => $email,
            'otp' => $otp,
            'folder' => $folder,
            'role' => $role,
        ];
    }
}
