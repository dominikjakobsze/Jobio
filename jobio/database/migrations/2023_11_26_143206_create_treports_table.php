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
        Schema::create('treports', function (Blueprint $table) {
            $table->uuid('id')->primary()->unique()->nullable(false);
            $table->text('message')->nullable(false);
            $table->uuid('resource_id')->nullable(false);
            $table->text('resource_model')->nullable(false);
            $table->text('link_source')->nullable(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('treports');
    }
};
