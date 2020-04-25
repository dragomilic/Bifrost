<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\RoleAcceso;

class RoleAccesoController extends Controller
{
    public function Mostrar()
    {
        
        $roleacceso = RoleAcceso::all();
        
        return response()->json($roleacceso);
    }
    public function Buscar($id)
    {
        //
        $roleacceso = DB::table('tblRoleAcceso')->where('id', $id)->get();

        return response()->json($roleacceso);
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

            
            $roleacceso = new RoleAcceso;
            $roleacceso->UUI = $data->UUI;
            $roleacceso->Nombre = $data->Nombre;
            $roleacceso->Descripcion = $data->Descripcion;
            
            $roleacceso->save();

            return response()->json($roleacceso);

        } catch (\Throwable $th) {
            return response()->json($th);
        }

    }
    public function Editar(Request $request)
    {
        //

        try {
            
            $data = (object) $request->json()->all();

            $roleacceso = RoleAcceso::find($data->id);
            $roleacceso->Nombre = $data->Nombre;
            $roleacceso->Descripcion = $data->Descripcion;

            $roleacceso->save();

            return response()->json($roleacceso);

        } catch (\Throwable $th) {
            return response()->json($th);
        }

    }
    public function Eliminar($id)
    {
        //
        //$out = new \Symfony\Component\Console\Output\ConsoleOutput();
        //$out->writeln($id);

        $roleacceso = RoleAcceso::find($id);
        $roleacceso->delete();

        return response()->json($roleacceso);
    }
}
