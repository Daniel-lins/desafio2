import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoticiasService } from './noticias.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { HttpClientModule } from '@angular/common/http';
// import { RegistrarComponent } from './registrar/registrar.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    ResultadoComponent,
    NoticiasComponent,
    // RegistrarComponent,
    HomeComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClientModule, NoticiasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
