<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Acceso;

class AccesoController extends Controller
{
    public function Mostrar()
    {
        $acceso = Acceso::all();
        
        return response()->json($acceso);
    }
    public function Buscar($id)
    {
        //
        $acceso = DB::table('tblAcceso')->where('id', $id)->get();

        return response()->json($acceso);
    }
    public function Guardar(Request $request)
    {
        try {


            $data = (object) $request->json()->all();

            //DD($request);
            //$out = new \Symfony\Component\Console\Output\ConsoleOutput();
            //$out->writeln($data->Nombre);
            //$out->writeln('*******************************************');
            //ConsoleOutput::writeln($request);

            
            $acceso = new Acceso;
            $acceso->UUI = $data->UUI;
            $acceso->Nombre = $data->Nombre;
            $acceso->Descripcion = $data->Descripcion;
            
            $acceso->save();

            return response()->json($acceso);

        } catch (\Throwable $th) {
            return response()->json($th);
        }

    }
    public function Editar(Request $request)
    {
        //

        try {
            
            $data = (object) $request->json()->all();

            $acceso = Acceso::find($data->id);
            $acceso->Nombre = $data->Nombre;
            $acceso->Descripcion = $data->Descripcion;

            $acceso->save();

            return response()->json($acceso);

        } catch (\Throwable $th) {
            return response()->json($th);
        }

    }
    public function Eliminar($id)
    {
        //
        //$out = new \Symfony\Component\Console\Output\ConsoleOutput();
        //$out->writeln($id);

        $acceso = Acceso::find($id);
        $acceso->delete();

        return response()->json($acceso);
    }
}
