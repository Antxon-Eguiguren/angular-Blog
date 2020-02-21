import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  mensajeOk: boolean;
  mensajeError: boolean;

  constructor(private router: Router) {

    this.formulario = new FormGroup({
      user: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.formulario.value.user === 'admin' && this.formulario.value.password === 'admin') {
      this.mensajeOk = true;
      this.mensajeError = false;
      setTimeout(timeout => {
        this.router.navigate(['new']);
      }, 3000);
    } else {
      this.mensajeError = true;
    }
  }

}
