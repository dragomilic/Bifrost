<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\UserRole;

class UserRoleController extends Controller
{
    public function Mostrar()
    {
        
        $userrole = UserRole::all();
        
        return response()->json($userrole);
    }
    public function Buscar($id)
    {
        //
        $userrole = DB::table('tblUserRole')->where('id', $id)->get();

        return response()->json($userrole);
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

            
            $userrole = new UserRole;
            $userrole->UUI = $data->UUI;
            $userrole->Nombre = $data->Nombre;
            $userrole->Descripcion = $data->Descripcion;
            
            $userrole->save();

            return response()->json($userrole);

        } catch (\Throwable $th) {
            return response()->json($th);
        }

    }
    public function Editar(Request $request)
    {
        //

        try {
            
            $data = (object) $request->json()->all();

            $userrole = UserRole::find($data->id);
            $userrole->Nombre = $data->Nombre;
            $userrole->Descripcion = $data->Descripcion;

            $userrole->save();

            return response()->json($userrole);

        } catch (\Throwable $th) {
            return response()->json($th);
        }

    }
    public function Eliminar($id)
    {
        //
        //$out = new \Symfony\Component\Console\Output\ConsoleOutput();
        //$out->writeln($id);

        $userrole = UserRole::find($id);
        $userrole->delete();

        return response()->json($userrole);
    }
}
