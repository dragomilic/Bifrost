<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProyectoController extends Controller
{
    protected $tabla = 'tblProyecto';
    //
    public function listado()
    {
        //
        $proyecto = DB::table('tblProyecto')->get();

        return response()->json($proyecto);
    }

    public function mostrar()
    {
        //
        $proyecto = DB::table('tblProyecto')->get();

        return response()->json($proyecto);
    }

    public function Guardar(Request $request)
    {
        $proyecto = DB::table('tblProyecto')->insertGetId(
            [
                'Nombre' => $request->Nombre, 
                'Descripcion' => $request->Descripcion,
                'Url' => $request->Url,
                'IdEstado' => 1
            ]
        );
    }
}
