export interface Experiencia{
    id?: number;
    nombre: string;
    perfil: string;
    finicio: string;
    ffinal: string;
    detalle: string;
    imagen?: string;
}

export interface Habilidad{
    id?: number;
    programa: string;
    porcentaje: string;
}

export interface Informatica{
    id: number;
    nombre: string;
    descripcion: string;
}

export interface Instruccion{
    id: number;
    formacion: string;
    titulo: string;
    organizacion: string;
    fegreso: string;
    imagen: string;
}

export interface Dpersonal{
    id: number;
    nombre: string;
    apellido: string;
    titulo: string;
    lugar: string;
    detalle: string;
    foto: string;
}