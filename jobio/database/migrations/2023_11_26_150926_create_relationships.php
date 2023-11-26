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
        Schema::table('treports', function (Blueprint $table){
            $table->foreign('resource_id','treports_FK_resource-id_-REF-_toffers_PK_id')->references('id')->on('toffers')->cascadeOnDelete()->cascadeOnUpdate();
        });
        Schema::table('toffers', function (Blueprint $table){
            $table->foreign('temployer_id','toffers_FK_temployer-id_-REF-_tpeople_PK_id')->references('id')->on('tpeople')->cascadeOnDelete()->cascadeOnUpdate();
        });
        Schema::table('toftops', function (Blueprint $table){
            $table->foreign('toption_id','toftops_FK_toption-id_-REF-_toptions_PK_id')->references('id')->on('toptions')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreign('toffer_id','toftops_FK_toffer-id_-REF-_toffers_PK_id')->references('id')->on('toffers')->cascadeOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('relationships');
    }
};
