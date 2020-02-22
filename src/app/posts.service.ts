import { Injectable } from '@angular/core';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  arrPosts: Post[];
  ultimoId: number;

  constructor() {
    this.arrPosts = [];
    this.ultimoId = 0;
  }

  // FUNCIONES DEL SERVICIO

  getAllPosts(): Post[] {
    return JSON.parse(localStorage.getItem('array de posts'));
  }

  getPostsByCategoria(pCategoria: string): Post[] {
    return this.arrPosts.filter(post => {
      return post.categoria.toLowerCase() === pCategoria.toLowerCase();
    });
  }

  getPostsByName(pBusqueda: string): Post[] {
    return this.arrPosts.filter(post => {
      const postCompleto = this.eliminarDiacriticos(this.eliminarEspacios(post.titulo + post.texto + post.autor + post.categoria));
      const busquedaCompleta = this.eliminarDiacriticos(this.eliminarEspacios(pBusqueda));
      return postCompleto.toLowerCase().includes(busquedaCompleta.toLowerCase());
    });
  }

  getById(pId: number): Post {
    return this.arrPosts.find(post => {
      return post.id === pId;
    });
  }

  addPost(pFormValues: any) {
    this.arrPosts.push(this.createNewPost(pFormValues));
    localStorage.setItem('array de posts', JSON.stringify(this.arrPosts));
  }

  deletePost(pId: number) {
    const position = this.arrPosts.findIndex(post => {
      return post.id === pId;
    });
    if (position !== -1) {
      this.arrPosts.splice(position, 1);
    }
    localStorage.removeItem('array de posts');
    localStorage.setItem('array de posts', JSON.stringify(this.arrPosts));
  }

  // FUNCIONES DE APOYO AL SERVICIO

  getLastId() {
    if (this.arrPosts === null) {
      return this.ultimoId = 0;
    } else {
      for (const post of this.arrPosts) {
        this.ultimoId = post.id;
      }
      return this.ultimoId;
    }
  }

  createNewPost(pFormValues: any): Post {
    const post = new Post(
      {
        id: this.getLastId() + 1,
        titulo: pFormValues.titulo,
        texto: pFormValues.texto,
        autor: pFormValues.autor,
        imagen: pFormValues.imagen,
        fecha: pFormValues.fecha,
        categoria: pFormValues.categoria
      }
    );
    return post;
  }

  eliminarEspacios(pCadena: string): string {
    const regex = / /g;
    return pCadena.replace(regex, '');
  }

  eliminarDiacriticos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
}
