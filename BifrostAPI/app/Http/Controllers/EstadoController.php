<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Estado;

class EstadoController extends Controller
{

    public function Mostrar()
    {
        
        $estado = Estado::all();
        
        return response()->json($estado);
    }
    public function Buscar($id)
    {
        //
        $estado = DB::table('tblEstado')->where('id', $id)->get();

        return response()->json($estado);
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

            
            $estado = new Estado;
            $estado->UUI = $data->UUI;
            $estado->Nombre = $data->Nombre;
            $estado->Descripcion = $data->Descripcion;
            
            $estado->save();

            return response()->json($estado);

        } catch (\Throwable $th) {
            return response()->json($th);
        }

    }
    public function Editar(Request $request)
    {
        //

        try {
            
            $data = (object) $request->json()->all();

            $estado = Estado::find($data->id);
            $estado->Nombre = $data->Nombre;
            $estado->Descripcion = $data->Descripcion;

            $estado->save();

            return response()->json($estado);

        } catch (\Throwable $th) {
            return response()->json($th);
        }

    }
    public function Eliminar($id)
    {
        //
        //$out = new \Symfony\Component\Console\Output\ConsoleOutput();
        //$out->writeln($id);

        $estado = Estado::find($id);
        $estado->delete();

        return response()->json($estado);
    }
}
