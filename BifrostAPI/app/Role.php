<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    /*
    $table->bigIncrements('id');
    $table->string('UUI');
    $table->string('Nombre');
    $table->string('Descripcion');
    $table->unsignedBigInteger('IdEstado');//rel
    $table->timestamps();
     */
    protected $table = 'tblRole';

    public $timestamps = 'U';
    
    protected $fillable = [
        'id',
        'UUI',
        'Nombre',
        'Descripcion',
        'IdEstado'
    ];
}
