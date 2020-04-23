/*Interface Madre*/
export interface ObjectInterface {
    id?: Number;
    UUI: String;
    //FechaCreacion: Date;
}

/**/
export interface Estado extends ObjectInterface{
    Nombre: String;
    Descripcion: String;
}

export interface Proyecto extends ObjectInterface {
    Nombre: String;
    Descripcion: String;
    Url: String;
    Estado: Estado;
}