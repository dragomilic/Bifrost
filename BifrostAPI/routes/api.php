<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => ['cors']], function () {
    Route::prefix('estado')->group(function () {
        Route::get('mostrar'  , 'EstadoController@Mostrar');
        Route::get('buscar'  , 'EstadoController@Buscar');
        Route::post('guardar' , 'EstadoController@Guardar');
        Route::post('editar'  , 'EstadoController@Editar');
        Route::post('eliminar/{id}', 'EstadoController@Eliminar');
    });
    Route::prefix('proyecto')->group(function () {
        Route::get('listado', 'ProyectoController@listado');
        Route::get('mostrar', 'ProyectoController@mostrar');
        Route::get('guardar', 'ProyectoController@guardar');
    });
    Route::get('api/csrf', function() {
        return response()->json(csrf_token());
    });
});
