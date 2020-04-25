<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTblClienteTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tblCliente', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('UUI');
            $table->string('Nombre');
            $table->string('Apellido');
            $table->string('Telefono');
            $table->string('Email')->unique();
            $table->unsignedBigInteger('IdUsuario');
            $table->unsignedBigInteger('IdTipo');
            $table->unsignedBigInteger('IdCuenta');
            $table->unsignedBigInteger('IdEstado');
            $table->timestamps();
            
            $table->foreign('IdUsuario')->references('id')->on('tblUsuario');
            //$table->foreignId('IdUsuario')->constrained();
            $table->foreign('IdTipo')->references('id')->on('tblTipoCliente');
            //$table->foreign('IdCuenta')->references('id')->on('tblCuenta');
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
        Schema::dropIfExists('tblCliente');
    }
}
