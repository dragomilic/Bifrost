<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Role;

class RoleController extends Controller
{
    //
    public function Mostrar()
    {
        //
        $role = Role::all();

        return response()->json($role);
    }

    public function Buscar($id)
    {
        //
        $role = DB::table('tblRole')->where('id', $id)->get();

        return response()->json($role);
    }

    public function Guardar(Request $request)
    {
        try {

            $data = $request->json()->all();
            //$estado = $data['Estado']['id'];
            
            //$out = new \Symfony\Component\Console\Output\ConsoleOutput();
            //$out->writeln($data['Nombre']);//$estado->id);
            //$out->writeln($estado->get('id'));
            //$out->writeln('*******************************************');

            /* */
            $role = new Role;
            $role->UUI = $data['UUI'];
            $role->Nombre = $data['Nombre'];
            $role->Descripcion = $data['Descripcion'];
            $role->IdEstado = $data['Estado']['id'];
            
            $role->save();

            return response()->json($role);

        } catch (\Throwable $th) {
            return response()->json($th);
        }

    }

    public function Editar(Request $request)
    {
        try {
            
            $data = (object) $request->json()->all();

            $role = Role::find($data->id);
            $role->Nombre = $data->Nombre;
            $role->Descripcion = $data->Descripcion;
            $role->Url = $data->Url;
            $role->IdEstado = $data->IdEstado;

            $role->save();

            return response()->json($role);

        } catch (\Throwable $th) {
            return response()->json($th);
        }

    }
    public function Eliminar($id)
    {
        $role = Role::find($id);
        $role->delete();

        return response()->json($role);
    }
}
