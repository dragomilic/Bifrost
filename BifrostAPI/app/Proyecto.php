<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Proyecto extends Model
{
    protected $table = 'tblProyecto';

    /*
        $table->bigIncrements('Indice');
        $table->string('Nombre');
        $table->string('Descripcion');
        $table->string('Url');
        $table->unsignedBigInteger('IdEstado');
    */
    protected $fillable = [
        'id',
        'Nombre',
        'Descripcion',
        'Url',
        'IdEstado'
    ];
}
