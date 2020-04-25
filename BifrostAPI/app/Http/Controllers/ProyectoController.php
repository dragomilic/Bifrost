<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Proyecto;

class ProyectoController extends Controller
{
    //
    public function Mostrar()
    {
        //
        $proyecto = Proyecto::all();

        return response()->json($proyecto);
    }

    public function Buscar($id)
    {
        //
        $proyecto = DB::table('tblProyecto')->where('id', $id)->get();

        return response()->json($proyecto);
    }

    public function Guardar(Request $request)
    {
        try {

            $data = (object) $request->json()->all();

            $proyecto = new Proyecto;
            $proyecto->UUI = $data->UUI;
            $proyecto->Nombre = $data->Nombre;
            $proyecto->Descripcion = $data->Descripcion;
            $proyecto->Url = $data->Url;
            $proyecto->IdEstado = $data->IdEstado;

            $proyecto->save();

            return response()->json($proyecto);

        } catch (\Throwable $th) {
            return response()->json($th);
        }

    }

    public function Editar(Request $request)
    {
        try {
            
            $data = (object) $request->json()->all();

            $proyecto = Proyecto::find($data->id);
            $proyecto->Nombre = $data->Nombre;
            $proyecto->Descripcion = $data->Descripcion;
            $proyecto->Url = $data->Url;
            $proyecto->IdEstado = $data->IdEstado;

            $proyecto->save();

            return response()->json($proyecto);

        } catch (\Throwable $th) {
            return response()->json($th);
        }

    }
    public function Eliminar($id)
    {
        $proyecto = Proyecto::find($id);
        $proyecto->delete();

        return response()->json($proyecto);
    }
}
