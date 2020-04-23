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

            //DD($request);
            //$out = new \Symfony\Component\Console\Output\ConsoleOutput();
            //$out->writeln($data['Nombre']);
            //$out->writeln('*******************************************');
            //ConsoleOutput::writeln($request);

            $data = (object) $request->json()->all();
            
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
    public function Editar(Request $request, $id)
    {
        //
        $estado = DB::table('tblEstado')->where('id', $id)->get();

        $estado->Nombre = $request->Nombre;

        $estado->save();

        return response()->json($estado);
    }
    public function Eliminar($id)
    {
        //
        $estado = DB::table('tblEstado')->where('id', $id)->delete();

        return response()->json($estado);
    }
}
