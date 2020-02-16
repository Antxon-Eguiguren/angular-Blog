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

  constructor(private postsService: PostsService) {
    this.arrPosts = [];
  }

  ngOnInit() {
    this.arrPosts = this.postsService.getAllPosts();
  }

  manejarClickBorrar(pPostId) {
    this.postsService.deletePost(pPostId);
  }

  manejarFiltroCategoria($event) {
    if ($event.target.value === 'todas' || $event.target.value === '') {
      this.arrPosts = this.postsService.getAllPosts();
    } else {
      this.arrPosts = this.postsService.getPostsByCategoria($event.target.value);
    }
  }

  manejarFiltroNombre($event) {
    this.arrPosts = this.postsService.getPostsByName($event.target.value);
  }
}
