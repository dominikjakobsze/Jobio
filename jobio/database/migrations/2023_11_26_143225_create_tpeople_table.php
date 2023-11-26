<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tpeople', function (Blueprint $table) {
            $table->uuid('id')->primary()->unique()->nullable(false);
            $table->text('email')->nullable(false)->unique();
            $table->text('otp')->nullable(false)->unique();
            $table->text('folder')->nullable(false)->unique();
            $table->text('role')->nullable(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tpeople');
    }
};
