<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTblUsrProyectoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tblUsrProyecto', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('IdProyecto');
            $table->unsignedBigInteger('IdUsuario');
            $table->timestamps();

            $table->foreign('IdProyecto')->references('id')->on('tblProyecto');
            $table->foreign('IdUsuario')->references('id')->on('tblUsuario');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tblUsrProyecto');
    }
}
