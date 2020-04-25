<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Proyecto extends Model
{
    protected $table = 'tblProyecto';

    public $timestamps = 'U';
    /*
        $table->bigIncrements('Indice');
        $table->string('Nombre');
        $table->string('Descripcion');
        $table->string('Url');
        $table->unsignedBigInteger('IdEstado');
    */
    protected $fillable = [
        'id',
        'UUI',
        'Nombre',
        'Descripcion',
        'Url',
        'IdEstado'
    ];
}
