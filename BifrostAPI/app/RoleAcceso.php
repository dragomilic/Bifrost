<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RoleAcceso extends Model
{
    /*
    Schema::create('tblRoleAcceso', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('UUI');
            $table->unsignedBigInteger('IdRole');
            $table->unsignedBigInteger('IdAcceso');
            $table->timestamps();

            $table->foreign('IdRole')->references('id')->on('tblRole');
            $table->foreign('IdAcceso')->references('id')->on('tblAcceso');
        });
    */
    protected $table = 'tblRoleAcceso';

    public $timestamps = 'U';
    
    protected $fillable = [
        'id',
        'UUI',
        'IdRole',
        'IdAcceso'
    ];
}
