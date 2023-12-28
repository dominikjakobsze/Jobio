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
        Schema::create('tresumes', function (Blueprint $table) {
            $table->uuid('id')->primary()->unique()->nullable(false);
            $table->uuid('tperson_id')->unique('tresumes_FK_tperson-id(UNIQUE)_-REF-_tpeople_PK_id')->nullable(false);
            $table->json('template_data')->nullable(false);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tresumes');
    }
};
