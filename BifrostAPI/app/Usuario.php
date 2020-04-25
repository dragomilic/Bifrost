<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    /*
    Schema::create('tblUsuario', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('UUI');
            $table->string('Nickname');
            $table->string('Password');
            $table->unsignedBigInteger('IdProyecto');//rel
            $table->foreign('IdProyecto')->references('id')->on('tblProyecto');
            $table->unsignedBigInteger('IdEstado')->unsigned()->nullable();//rel
            $table->foreign('IdEstado')->references('id')->on('tblEstado');
            $table->timestamps();
        });
    */
    protected $table = 'tblUsuario';

    public $timestamps = 'U';
    
    protected $fillable = [
        'id',
        'UUI',
        'Nickname',
        'Password'
    ];
}
