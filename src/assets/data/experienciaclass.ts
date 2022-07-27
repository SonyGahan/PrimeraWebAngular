export class Experienciaclass {
    id?: number;
    nombre: string;
    perfil: string;
    finicio: string;
    ffinal: string;
    detalle: string;
    imagen?: string;

    constructor(nombre: string, perfil: string, finicio: string, ffinal: string, detalle: string){
        this.nombre = nombre;
        this.perfil = perfil;
        this.finicio = finicio;
        this.ffinal = ffinal;
        this.detalle = detalle;
    }
}
