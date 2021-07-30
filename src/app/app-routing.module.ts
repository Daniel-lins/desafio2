import { RegistrarComponent } from './registrar/registrar.component';
import {HomeComponent} from './home/home.component';
import {PostComponent} from './post/post.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
     {path: '',  component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path: 'registrar', component: RegistrarComponent},
    {path: 'post', component: PostComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
