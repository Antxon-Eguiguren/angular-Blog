import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PostComponent } from './post/post.component';
import { LoginComponent } from './login/login.component';
import { EditarPostComponent } from './editar-post/editar-post.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    FormularioComponent,
    PostComponent,
    LoginComponent,
    EditarPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
