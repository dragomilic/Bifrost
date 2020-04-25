<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Usuario;

class UsuarioController extends Controller
{
    public function Mostrar()
    {
        
        $usuario = Usuario::all();
        
        return response()->json($usuario);
    }
    public function Buscar($id)
    {
        //
        $usuario = DB::table('tblUsuario')->where('id', $id)->get();

        return response()->json($usuario);
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

            
            $usuario = new Usuario;
            $usuario->UUI = $data->UUI;
            $usuario->Nombre = $data->Nombre;
            $usuario->Descripcion = $data->Descripcion;
            
            $usuario->save();

            return response()->json($usuario);

        } catch (\Throwable $th) {
            return response()->json($th);
        }

    }
    public function Editar(Request $request)
    {
        //

        try {
            
            $data = (object) $request->json()->all();

            $usuario = Usuario::find($data->id);
            $usuario->Nombre = $data->Nombre;
            $usuario->Descripcion = $data->Descripcion;

            $usuario->save();

            return response()->json($usuario);

        } catch (\Throwable $th) {
            return response()->json($th);
        }

    }
    public function Eliminar($id)
    {
        //
        //$out = new \Symfony\Component\Console\Output\ConsoleOutput();
        //$out->writeln($id);

        $usuario = Usuario::find($id);
        $usuario->delete();

        return response()->json($usuario);
    }
}
