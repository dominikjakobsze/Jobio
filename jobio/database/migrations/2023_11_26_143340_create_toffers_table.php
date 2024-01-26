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
        Schema::create('toffers', function (Blueprint $table) {
            $table->uuid('id')->primary()->unique()->nullable(false);
            $table->integer('min_salary')->nullable(false);
            $table->integer('max_salary')->nullable(false);
            $table->text('title')->nullable(false);
            $table->json('page_offer')->nullable(false);
            $table->double('longitude')->nullable(false);
            $table->double('latitude')->nullable(false);
            $table->text('city')->nullable(false);
            $table->text('street')->nullable(false);
            $table->text('zip_code')->nullable(false);
            $table->text('voivodeship')->nullable(false);
            $table->uuid('temployer_id')->nullable(false);
            $table->text('company_icon')->nullable(false);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('toffers');
    }
};
