import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-editar-post',
  templateUrl: './editar-post.component.html',
  styleUrls: ['./editar-post.component.css']
})
export class EditarPostComponent implements OnInit {

  post: Post;
  formulario: FormGroup;

  constructor(private postsService: PostsService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.formulario = new FormGroup({
      titulo: new FormControl(''),
      texto: new FormControl(''),
      autor: new FormControl(''),
      imagen: new FormControl(''),
      fecha: new FormControl(''),
      categoria: new FormControl('')
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.post = this.postsService.getById(parseInt(params.postId, 10));
    });
  }

  onSubmit() {
    this.postsService.editPost(this.formulario.value, this.post.id);
    this.router.navigate(['admin']);
  }
}
