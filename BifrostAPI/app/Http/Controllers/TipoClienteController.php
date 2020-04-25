<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\TipoCliente;

class TipoClienteController extends Controller
{
    public function Mostrar()
    {
        
        $tipocliente = TipoCliente::all();
        
        return response()->json($tipocliente);
    }
    public function Buscar($id)
    {
        //
        $tipocliente = DB::table('tblTipoCliente')->where('id', $id)->get();

        return response()->json($tipocliente);
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

            
            $tipocliente = new TipoCliente;
            $tipocliente->UUI = $data->UUI;
            $tipocliente->Nombre = $data->Nombre;
            $tipocliente->Descripcion = $data->Descripcion;
            
            $tipocliente->save();

            return response()->json($tipocliente);

        } catch (\Throwable $th) {
            return response()->json($th);
        }

    }
    public function Editar(Request $request)
    {
        //

        try {
            
            $data = (object) $request->json()->all();

            $tipocliente = TipoCliente::find($data->id);
            $tipocliente->Nombre = $data->Nombre;
            $tipocliente->Descripcion = $data->Descripcion;

            $tipocliente->save();

            return response()->json($tipocliente);

        } catch (\Throwable $th) {
            return response()->json($th);
        }

    }
    public function Eliminar($id)
    {
        //
        //$out = new \Symfony\Component\Console\Output\ConsoleOutput();
        //$out->writeln($id);

        $tipocliente = TipoCliente::find($id);
        $tipocliente->delete();

        return response()->json($tipocliente);
    }
}
