<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTblTipoClienteTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tblTipoCliente', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('Nombre');
            $table->unsignedBigInteger('IdEstado');//rel
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
        Schema::dropIfExists('tblTipoCliente');
    }
}
