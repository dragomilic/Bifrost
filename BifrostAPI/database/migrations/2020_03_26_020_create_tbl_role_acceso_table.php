<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTblRoleAccesoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tblRoleAcceso', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('UUI');
            $table->unsignedBigInteger('IdRole');
            $table->unsignedBigInteger('IdAcceso');
            $table->timestamps();

            $table->foreign('IdRole')->references('id')->on('tblRole');
            $table->foreign('IdAcceso')->references('id')->on('tblAcceso');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tblRoleAcceso');
    }
}
