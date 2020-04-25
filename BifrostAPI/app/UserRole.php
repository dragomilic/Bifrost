<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserRole extends Model
{
    /*
    Schema::create('tblUsrRole', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('UUI');
            $table->unsignedBigInteger('IdRole');
            $table->unsignedBigInteger('IdUsuario');
            $table->timestamps();

            $table->foreign('IdRole')->references('id')->on('tblRole');
            $table->foreign('IdUsuario')->references('id')->on('tblUsuario');
        });
    */
    protected $table = 'tblUsrRole';

    public $timestamps = 'U';
    
    protected $fillable = [
        'id',
        'UUI',
        'IdRole',
        'IdUsuario'
    ];
}
