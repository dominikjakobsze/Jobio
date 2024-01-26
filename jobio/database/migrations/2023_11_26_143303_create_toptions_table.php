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
        Schema::create('toptions', function (Blueprint $table) {
            $table->uuid('id')->primary()->unique()->nullable(false);
            $table->text('option_type')->nullable(false);
            $table->string('option_value',255)->nullable(false)->unique('toptions_option-value_unique');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('toptions');
    }
};
