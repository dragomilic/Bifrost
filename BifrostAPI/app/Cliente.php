<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    /*
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
     */
    protected $table = 'tblCliente';

    public $timestamps = 'U';
    
    protected $fillable = [
        'id',
        'UUI',
        'Nombre',
        'Apellido',
        'Telefono',
        'Email',
    ];
}
