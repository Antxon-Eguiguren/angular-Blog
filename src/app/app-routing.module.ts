import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PostComponent } from './post/post.component';
import { LoginComponent } from './login/login.component';
import { EditarPostComponent } from './editar-post/editar-post.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'blog' },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:postId', component: PostComponent },
  { path: 'edit/:postId', component: EditarPostComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: FormularioComponent },
  { path: '**', redirectTo: 'blog' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
