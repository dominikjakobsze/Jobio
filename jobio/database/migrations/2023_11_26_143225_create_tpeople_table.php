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
            $table->string('email',255)->nullable(false)->unique('tpeople_email_unique');
            $table->string('otp',255)->nullable(true)->unique('tpeople_otp_unique');
            $table->string('folder',255)->nullable(false)->unique('tpeople_folder_unique');
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
