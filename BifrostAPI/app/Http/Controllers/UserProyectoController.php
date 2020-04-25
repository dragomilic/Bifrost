<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\UserProyecto;

class UserProyectoController extends Controller
{
    public function Mostrar()
    {
        
        $userproyecto = UserProyecto::all();
        
        return response()->json($userproyecto);
    }
    public function Buscar($id)
    {
        //
        $userproyecto = DB::table('tblUserProyecto')->where('id', $id)->get();

        return response()->json($userproyecto);
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

            
            $userproyecto = new UserProyecto;
            $userproyecto->UUI = $data->UUI;
            $userproyecto->Nombre = $data->Nombre;
            $userproyecto->Descripcion = $data->Descripcion;
            
            $userproyecto->save();

            return response()->json($userproyecto);

        } catch (\Throwable $th) {
            return response()->json($th);
        }

    }
    public function Editar(Request $request)
    {
        //

        try {
            
            $data = (object) $request->json()->all();

            $userproyecto = UserProyecto::find($data->id);
            $userproyecto->Nombre = $data->Nombre;
            $userproyecto->Descripcion = $data->Descripcion;

            $userproyecto->save();

            return response()->json($userproyecto);

        } catch (\Throwable $th) {
            return response()->json($th);
        }

    }
    public function Eliminar($id)
    {
        //
        //$out = new \Symfony\Component\Console\Output\ConsoleOutput();
        //$out->writeln($id);

        $userproyecto = UserProyecto::find($id);
        $userproyecto->delete();

        return response()->json($userproyecto);
    }
}
