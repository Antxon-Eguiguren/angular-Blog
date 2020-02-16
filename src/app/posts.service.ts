import { Injectable } from '@angular/core';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  arrPosts: Post[];
  ultimoId: number;

  constructor() {
    this.arrPosts = new Array();
    this.ultimoId = 0;
  }

  // FUNCIONES DEL SERVICIO

  addPost(pTitulo: string, pTexto: string, pAutor: string, pImagen: string, pFecha: string, pCategoria: string) {
    this.arrPosts = this.leerLS();
    for (const post of this.arrPosts) {
      this.ultimoId = post.id;
    }
    const post = new Post(this.ultimoId + 1, pTitulo, pTexto, pAutor, pImagen, pFecha, pCategoria);
    this.arrPosts.push(post);
    localStorage.setItem('array de posts', JSON.stringify(this.arrPosts));
  }

  getAllPosts(): Post[] {
    return this.leerLS();
  }

  getPostsByCategoria(pCategoria: string): Post[] {
    this.arrPosts = this.leerLS();
    return this.arrPosts.filter(post => {
      return post.categoria === pCategoria;
    });
  }

  getPostsByName(pPalabras: string): Post[] {
    this.arrPosts = this.leerLS();
    return this.arrPosts.filter(post => {
      const postCompleto = this.eliminarDiacriticos(this.eliminarEspacios(post.titulo + post.texto + post.autor + post.categoria));
      const busquedaCompleta = this.eliminarDiacriticos(this.eliminarEspacios(pPalabras));
      return postCompleto.toLowerCase().includes(busquedaCompleta.toLowerCase());
    });
  }

  getById(pId: number): Post {
    this.arrPosts = this.leerLS();
    return this.arrPosts.find(post => {
      return post.id === pId;
    });
  }

  deletePost(pId: number) {
    this.arrPosts = this.leerLS();
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

  leerLS(): Post[] {
    if (JSON.parse(localStorage.getItem('array de posts')) === null) {
      return this.arrPosts = new Array();
    } else {
      return this.arrPosts = JSON.parse(localStorage.getItem('array de posts'));
    }
  }

  eliminarEspacios(pCadena: string): string {
    const regex = / /g;
    return pCadena.replace(regex, '');
  }

  eliminarDiacriticos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
}
