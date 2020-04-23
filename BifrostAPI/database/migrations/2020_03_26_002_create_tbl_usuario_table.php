<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTblUsuarioTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tblUsuario', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('Nickname');
            $table->string('Password');
            $table->unsignedBigInteger('IdProyecto');//rel
            $table->foreign('IdProyecto')->references('id')->on('tblProyecto');
            $table->unsignedBigInteger('IdEstado')->unsigned()->nullable();//rel
            $table->foreign('IdEstado')->references('id')->on('tblEstado');
            $table->timestamps();
        });

        Schema::enableForeignKeyConstraints();
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tblUsuario');
    }
}
