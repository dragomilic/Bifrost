<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Cliente;

class ClienteController extends Controller
{
    public function Mostrar()
    {
        
        $cliente = Cliente::all();
        
        return response()->json($cliente);
    }
    public function Buscar($id)
    {
        //
        $cliente = DB::table('tblCliente')->where('id', $id)->get();

        return response()->json($cliente);
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

            
            $cliente = new Cliente;
            $cliente->UUI = $data->UUI;
            $cliente->Nombre = $data->Nombre;
            $cliente->Descripcion = $data->Descripcion;
            
            $cliente->save();

            return response()->json($cliente);

        } catch (\Throwable $th) {
            return response()->json($th);
        }

    }
    public function Editar(Request $request)
    {
        //

        try {
            
            $data = (object) $request->json()->all();

            $cliente = Cliente::find($data->id);
            $cliente->Nombre = $data->Nombre;
            $cliente->Descripcion = $data->Descripcion;

            $cliente->save();

            return response()->json($cliente);

        } catch (\Throwable $th) {
            return response()->json($th);
        }

    }
    public function Eliminar($id)
    {
        //
        //$out = new \Symfony\Component\Console\Output\ConsoleOutput();
        //$out->writeln($id);

        $cliente = Cliente::find($id);
        $cliente->delete();

        return response()->json($cliente);
    }
}
