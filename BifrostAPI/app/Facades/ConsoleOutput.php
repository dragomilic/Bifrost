<?php

namespace App\Facades;

use Illuminate\Support\Facades;

class ConsoleOutput extends Facade {

    protected static function getFacadeAccessor() { 
        return 'consoleOutput';
    }
   
}