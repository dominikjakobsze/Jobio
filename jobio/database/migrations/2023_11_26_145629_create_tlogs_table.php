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
        Schema::create('tlogs', function (Blueprint $table) {
            $table->uuid('id')->primary()->unique()->nullable(false);
            $table->uuid('tperson_id')->nullable(true);
            $table->text('action_message')->nullable(false);
            $table->text('action_model')->nullable(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tlogs');
    }
};
