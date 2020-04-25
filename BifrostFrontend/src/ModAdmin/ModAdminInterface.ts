/*Interface Madre*/
export interface ObjectInterface {
    id?: Number;
    UUI: String;
    Estado?: Estado;
}

/**/
export interface Estado {
    id?: Number;
    UUI: String;
    Nombre: String;
    Descripcion: String;
}

export interface Acceso extends ObjectInterface{
    Nombre: String;
    Controller: String;
    Action: String;
    Posicion: Number;
    Orden: Number;
}

/**/
export interface Proyecto extends ObjectInterface {
    Nombre: String;
    Descripcion: String;
    Url: String;
}

export interface Role extends ObjectInterface{
    Nombre: String;
    Descripcion: String;
}

export interface TipoCliente extends ObjectInterface{
    Nombre: String;
    Descripcion: String;
}

export interface Usuario extends ObjectInterface{
    Nickname: String;
    Password: String;
    Descripcion: String;
    Proyecto: Proyecto;
}

export interface RoleAcceso extends ObjectInterface{
    IdRole: Number;
    IdAcceso: Number;
}

export interface UsrProyecto extends ObjectInterface{
    IdProyecto: Number;
    IdUsuario: Number;
}

export interface UsrProyecto extends ObjectInterface{
    IdRole: Number;
    IdUsuario: Number;
}

export interface Cliente extends ObjectInterface{
    Nombre: String;
    Apellido: String;
    Telefono: String;
    Email: String;
    Usuario: Usuario;
    TipoCliente: TipoCliente;
}

/*

export interface Acceso extends ObjectInterface{
    Nombre: String;
    Controller: String;
    Estado: Estado;
}

 */
/*
$table->string('UUI');
*/