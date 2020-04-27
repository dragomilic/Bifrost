<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\TipoCliente;

class TipoClienteController extends Controller
{
    //
    public function Mostrar()
    {
        //
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

            $data = $request->json()->all();
            //$estado = $data['Estado']['id'];
            
            //$out = new \Symfony\Component\Console\Output\ConsoleOutput();
            //$out->writeln($data['Nombre']);//$estado->id);
            //$out->writeln($estado->get('id'));
            //$out->writeln('*******************************************');

            /* */
            $tipocliente = new TipoCliente;
            $tipocliente->UUI = $data['UUI'];
            $tipocliente->Nombre = $data['Nombre'];
            $tipocliente->Descripcion = $data['Descripcion'];
            $tipocliente->IdEstado = $data['Estado']['id'];
            
            $tipocliente->save();

            return response()->json($tipocliente);

        } catch (\Throwable $th) {
            return response()->json($th);
        }

    }

    public function Editar(Request $request)
    {
        try {
            
            $data = (object) $request->json()->all();

            $tipocliente = TipoCliente::find($data->id);
            $tipocliente->Nombre = $data->Nombre;
            $tipocliente->Descripcion = $data->Descripcion;
            $tipocliente->Url = $data->Url;
            $tipocliente->IdEstado = $data->IdEstado;

            $tipocliente->save();

            return response()->json($tipocliente);

        } catch (\Throwable $th) {
            return response()->json($th);
        }

    }
    public function Eliminar($id)
    {
        $tipocliente = TipoCliente::find($id);
        $tipocliente->delete();

        return response()->json($tipocliente);
    }
}
