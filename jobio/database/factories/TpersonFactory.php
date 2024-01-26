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
            $uniqueEmails = Tperson::select(['email', DB::raw("MAX(id) as id")])
                ->groupBy(['email'])
                ->get()
                ->pluck(['id']);
            Tperson::whereNotIn('id', $uniqueEmails)->forceDelete();
            $uniqueFolders = Tperson::select(['folder', DB::raw("MAX(id) as id")])
                ->groupBy(['folder'])
                ->get()
                ->pluck(['id']);
            Tperson::whereNotIn('id', $uniqueFolders)->forceDelete();
            $uniqueOtps = Tperson::select(['otp', DB::raw("MAX(id) as id")])
                ->groupBy(['otp'])
                ->get()
                ->pluck(['id']);
            Tperson::whereNotIn('id', $uniqueOtps)->forceDelete();
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
