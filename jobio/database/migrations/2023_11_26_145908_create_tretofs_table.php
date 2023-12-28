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
        Schema::create('tretofs', function (Blueprint $table) {
            $table->uuid('id')->primary()->unique()->nullable(false);
            $table->uuid('toffer_id')->nullable(false);
            $table->uuid('tresume_id')->nullable(false);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tretofs');
    }
};
