import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrPosts: Post[];
  resultadoFiltros: boolean;

  constructor(private postsService: PostsService) {
    this.arrPosts = [];
    this.resultadoFiltros = true;
  }

  ngOnInit() {
    this.arrPosts = this.postsService.getAllPosts();
  }

  manejarFiltroCategoria($event) {
    if ($event.target.value === 'All' || $event.target.value === '') {
      this.arrPosts = this.postsService.getAllPosts();
    } else {
      this.arrPosts = this.postsService.getPostsByCategoria($event.target.value);
    }
    this.comprobarResultadosFiltros();
  }

  manejarFiltroNombre($event) {
    this.arrPosts = this.postsService.getPostsByName($event.target.value);
    this.comprobarResultadosFiltros();
  }

  comprobarResultadosFiltros() {
    if (this.arrPosts.length === 0) {
      this.resultadoFiltros = false;
    } else {
      this.resultadoFiltros = true;
    }
  }

}
