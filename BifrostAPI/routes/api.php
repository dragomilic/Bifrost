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
        Route::get('mostrar'  , 'ProyectoController@Mostrar');
        Route::get('buscar'  , 'ProyectoController@Buscar');
        Route::post('guardar' , 'ProyectoController@Guardar');
        Route::post('editar'  , 'ProyectoController@Editar');
        Route::post('eliminar/{id}', 'ProyectoController@Eliminar');
    });
    Route::prefix('role')->group(function () {
        Route::get('mostrar'  , 'RoleController@Mostrar');
        Route::get('buscar'  , 'RoleController@Buscar');
        Route::post('guardar' , 'RoleController@Guardar');
        Route::post('editar'  , 'RoleController@Editar');
        Route::post('eliminar/{id}', 'RoleController@Eliminar');
    });
    Route::prefix('tipocliente')->group(function () {
        Route::get('mostrar'  , 'RoleController@Mostrar');
        Route::get('buscar'  , 'RoleController@Buscar');
        Route::post('guardar' , 'RoleController@Guardar');
        Route::post('editar'  , 'RoleController@Editar');
        Route::post('eliminar/{id}', 'RoleController@Eliminar');
    });
    Route::get('api/csrf', function() {
        return response()->json(csrf_token());
    });
});
