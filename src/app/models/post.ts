export class Post {
    id: number;
    titulo: string;
    texto: string;
    autor: string;
    imagen: string;
    fecha: string;
    categoria: string;

    // Al constructor le paso un objeto con las siguientes claves
    constructor({ id, titulo, texto, autor, imagen, fecha, categoria }) {
        this.id = id;
        this.titulo = titulo;
        this.texto = texto;
        this.autor = autor;
        this.imagen = imagen;
        this.fecha = fecha;
        this.categoria = categoria;
    }
}
