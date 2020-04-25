<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Acceso extends Model
{
    /*
    $table->bigIncrements('id');
    $table->string('UUI');
    $table->string('Nombre');
    $table->string('Controller');
    $table->string('Accion');
    $table->unsignedBigInteger('Posicion');
    $table->unsignedBigInteger('Orden');
    $table->unsignedBigInteger('IdEstado');
    $table->timestamps();
    */

    protected $table = 'tblAcceso';

    public $timestamps = 'U';
    
    protected $fillable = [
        'id',
        'UUI',
        'Nombre',
        'Controller',
        'Accion',
        'Posicion',
        'Orden',
        'IdEstado'
    ];
}
