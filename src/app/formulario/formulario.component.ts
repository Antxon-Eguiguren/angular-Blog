import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../models/post';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  postCreado: boolean;

  constructor(private postsService: PostsService, private router: Router) {

    this.postCreado = false;

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
  }

  onSubmit() {
    this.postsService.addPost(this.formulario.value);
    this.postCreado = true;

    setTimeout(timeout => {
      this.router.navigate(['blog']);
    }, 5000);
  }
}
