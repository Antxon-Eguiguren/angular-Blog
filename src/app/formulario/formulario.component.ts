import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(pFormValues) {
    this.postsService.addPost(pFormValues.texto1, pFormValues.texto2, pFormValues.texto3, pFormValues.texto4, pFormValues.texto5, pFormValues.texto6);
    this.router.navigate(['blog']);
  }
}
