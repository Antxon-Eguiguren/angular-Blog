import { Component, OnInit, DoCheck } from '@angular/core';
import { PostsService } from '../posts.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../models/post';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit, DoCheck {

  formulario: FormGroup;
  postCreado: boolean;
  arrPosts: Post[];

  constructor(private postsService: PostsService) {

    this.postCreado = false;
    this.arrPosts = [];

    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required
      ]),
      texto: new FormControl('', [
        Validators.required
      ]),
      autor: new FormControl('', [
        Validators.required
      ]),
      imagen: new FormControl('', [
        Validators.required
      ]),
      fecha: new FormControl('', [
        Validators.required
      ]),
      categoria: new FormControl('', [
        Validators.required
      ]),
    });
  }

  ngOnInit() {
    this.arrPosts = this.postsService.getAllPosts();
  }

  ngDoCheck() {
    if (this.postCreado === true) {
      setTimeout(timeout => {
        this.postCreado = false;
      }, 3000);
    }
  }

  manejarClickBorrar(pPostId) {
    this.postsService.deletePost(pPostId);
    this.arrPosts = this.postsService.getAllPosts();
  }

  onSubmit() {
    this.postsService.addPost(this.formulario.value);
    this.postCreado = true;
    this.arrPosts = this.postsService.getAllPosts();

    setTimeout(timeout => {
      this.formulario.reset();
    }, 3000);
  }
}
