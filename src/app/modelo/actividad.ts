export class Actividad {
    id_act?: number;
    nom_act: String;
    fecha_act: String;
    horario_act: String;
    info_principal: String;
    imagen: Blob;




    constructor(nom_act: string, fecha_act: string, horario_act: string, info_principal: string, imagen: Blob){ 
        this.nom_act = nom_act;
        this.fecha_act = fecha_act;
        this.horario_act = fecha_act;
        this.info_principal = info_principal;
       this.imagen = imagen;
    }
}
