<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TipoCliente extends Model
{
    /*
    Schema::create('tblTipoCliente', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('UUI');
            $table->string('Nombre');
            $table->string('Descripcion');
            $table->unsignedBigInteger('IdEstado');//rel
            $table->timestamps();

            $table->foreign('IdEstado')->references('id')->on('tblEstado');
        });
    */
    protected $table = 'tblTipoCliente';

    public $timestamps = 'U';
    
    protected $fillable = [
        'id',
        'UUI',
        'Nombre',
        'Descripcion',
        'IdEstado'
    ];
}
