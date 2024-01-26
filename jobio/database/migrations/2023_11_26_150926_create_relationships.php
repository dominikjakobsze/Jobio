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
        Schema::table('treports', function (Blueprint $table) {
            $table
                ->foreign('resource_id', 'treports_FK_resource-id_-REF-_toffers_PK_id')
                ->references('id')
                ->on('toffers')
                ->cascadeOnDelete()
                ->cascadeOnUpdate();
        });
        Schema::table('toffers', function (Blueprint $table) {
            $table
                ->foreign('temployer_id', 'toffers_FK_temployer-id_-REF-_tpeople_PK_id')
                ->references('id')
                ->on('tpeople')
                ->cascadeOnDelete()
                ->cascadeOnUpdate();
        });
        Schema::table('toftops', function (Blueprint $table) {
            $table
                ->foreign('toption_id', 'toftops_FK_toption-id_-REF-_toptions_PK_id')
                ->references('id')
                ->on('toptions')
                ->cascadeOnDelete()
                ->cascadeOnUpdate();
            $table
                ->foreign('toffer_id', 'toftops_FK_toffer-id_-REF-_toffers_PK_id')
                ->references('id')
                ->on('toffers')
                ->cascadeOnDelete()
                ->cascadeOnUpdate();
        });
        Schema::table('tfiles', function (Blueprint $table) {
            $table
                ->foreign('tperson_id', 'tfiles_FK_tperson-id_-REF-_tpeople_PK_id')
                ->references('id')
                ->on('tpeople')
                ->cascadeOnDelete()
                ->cascadeOnUpdate();
        });
        Schema::table('tresumes', function (Blueprint $table) {
            $table
                ->foreign('tperson_id', 'tresumes_FK_tperson-id_-REF-_tpeople_PK_id')
                ->references('id')
                ->on('tpeople')
                ->cascadeOnDelete()
                ->cascadeOnUpdate();
        });
        Schema::table('tretofs', function (Blueprint $table) {
            $table
                ->foreign('toffer_id', 'tretofs_FK_toffer-id_-REF-_toffers_PK_id')
                ->references('id')
                ->on('toffers')
                ->cascadeOnDelete()
                ->cascadeOnUpdate();
            $table
                ->foreign('tresume_id', 'tretofs_FK_tresume-id_-REF-_tresumes_PK_id')
                ->references('id')
                ->on('tresumes')
                ->cascadeOnDelete()
                ->cascadeOnUpdate();
        });
    }

    public function down(): void
    {
        Schema::table('tretofs', function (Blueprint $table) {
            $table->dropForeign('tretofs_FK_tresume-id_-REF-_tresumes_PK_id');
            $table->dropForeign('tretofs_FK_toffer-id_-REF-_toffers_PK_id');
        });
        Schema::table('treports', function (Blueprint $table) {
            $table->dropForeign('treports_FK_resource-id_-REF-_toffers_PK_id');
        });
        Schema::table('toffers', function (Blueprint $table) {
            $table->dropForeign('toffers_FK_temployer-id_-REF-_tpeople_PK_id');
        });
        Schema::table('toftops', function (Blueprint $table) {
            $table->dropForeign('toftops_FK_toption-id_-REF-_toptions_PK_id');
            $table->dropForeign('toftops_FK_toffer-id_-REF-_toffers_PK_id');
        });
        Schema::table('tfiles', function (Blueprint $table) {
            $table->dropForeign('tfiles_FK_tperson-id_-REF-_tpeople_PK_id');
        });
        Schema::table('tresumes', function (Blueprint $table) {
            $table->dropForeign('tresumes_FK_tperson-id_-REF-_tpeople_PK_id');
        });
    }
};
