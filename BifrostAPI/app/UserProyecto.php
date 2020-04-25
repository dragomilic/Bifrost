<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserProyecto extends Model
{
    /*
    Schema::create('tblUsrProyecto', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('UUI');
            $table->unsignedBigInteger('IdProyecto');
            $table->unsignedBigInteger('IdUsuario');
            $table->timestamps();

            $table->foreign('IdProyecto')->references('id')->on('tblProyecto');
            $table->foreign('IdUsuario')->references('id')->on('tblUsuario');
        });
    */
    protected $table = 'tblUsrProyecto';

    public $timestamps = 'U';
    
    protected $fillable = [
        'id',
        'UUI',
        'IdProyecto',
        'IdUsuario'
    ];
}
