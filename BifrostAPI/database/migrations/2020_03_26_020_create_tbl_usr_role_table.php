<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTblUsrRoleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tblUsrRole', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('IdRole');
            $table->unsignedBigInteger('IdUsuario');
            $table->timestamps();

            $table->foreign('IdRole')->references('id')->on('tblRole');
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
        Schema::dropIfExists('tblUsrRole');
    }
}
