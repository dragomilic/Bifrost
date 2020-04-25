<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTblProyectoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tblProyecto', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('UUI');
            $table->string('Nombre');
            $table->string('Descripcion');
            $table->string('Url');
            $table->unsignedBigInteger('IdEstado');
            $table->timestamps();

            $table->foreign('IdEstado')->references('id')->on('tblEstado');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tblProyecto');
    }
}
