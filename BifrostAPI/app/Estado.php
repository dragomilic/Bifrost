<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Estado extends Model
{
    //
    protected $table = 'tblEstado';

    public $timestamps = 'U';
    /*
    $table->bigIncrements('id')->auntoincrement();
    $table->uuid('UUI');
    $table->string('Nombre');
    $table->string('Descripcion');
    $table->date('FechaCreacion');
    $table->timestamps();
    */
    protected $fillable = [
        'id',
        'UUI',
        'Nombre',
        'Descripcion'
    ];
}
