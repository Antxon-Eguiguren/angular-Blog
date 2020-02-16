export class Post {
    id: number;
    titulo: string;
    texto: string;
    autor: string;
    imagen: string;
    fecha: string;
    categoria: string;

    constructor(pId: number, pTitulo: string, pTexto: string, pAutor: string, pImagen: string, pFecha: string, pCategoria: string) {
        this.id = pId;
        this.titulo = pTitulo;
        this.texto = pTexto;
        this.autor = pAutor;
        this.imagen = pImagen;
        this.fecha = pFecha;
        this.categoria = pCategoria;
    }
}
