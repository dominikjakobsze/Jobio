<?php

namespace Database\Factories;

use App\Models\Tperson;
use Hash;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tperson>
 */
class TpersonFactory extends Factory
{
    public function configure(): static
    {
        return $this->afterCreating(function () {
            $tpersonEmails = Tperson::select(['email', DB::raw('MAX(id) as id')])
                ->groupBy('email')
                ->havingRaw('COUNT(email) > 1')
                ->get()
                ->pluck('id')
                ->flatten()
                ->toArray();
            if (count($tpersonEmails) != 0) {
                Tperson::whereIn('id', $tpersonEmails)->delete();
            }
            $tpersonOtps = Tperson::select(['otp', DB::raw('MAX(id) as id')])
                ->groupBy('otp')
                ->havingRaw('COUNT(otp) > 1')
                ->get()
                ->pluck('id')
                ->flatten()
                ->toArray();
            if (count($tpersonOtps) != 0) {
                Tperson::whereIn('id', $tpersonOtps)->delete();
            }
            $tpersonFolders = Tperson::select(['folder', DB::raw('MAX(id) as id')])
                ->groupBy('folder')
                ->havingRaw('COUNT(folder) > 1')
                ->get()
                ->pluck('id')
                ->flatten()
                ->toArray();
            if (count($tpersonFolders) != 0) {
                Tperson::whereIn('id', $tpersonFolders)->delete();
            }
        });
    }
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $email = fake()
            ->unique()
            ->email();
        $otp =
            fake()->numberBetween(0, 10) > 7
                ? Hash::make(
                    fake()
                        ->unique()
                        ->word(),
                )
                : null;
        if ($otp != null) {
            Tperson::where('otp', $otp)->delete();
        }
        $folder = implode(
            '',
            fake()
                ->unique()
                ->words(4),
        );
        Tperson::where('email', $email)->delete();
        Tperson::where('folder', $folder)->delete();
        return [
            'email' => $email,
            'otp' => $otp,
            'folder' => $folder,
            'role' => fake()->randomElement(['support', 'employer', 'employer', 'employer', 'employee', 'employee', 'employee', 'employee', 'employee', 'employee', 'employee', 'employee', 'employee', 'employee', 'employee', 'employee', 'employee']),
        ];
    }
}
