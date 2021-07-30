import { NoticiasService } from './../noticias.service';
import { Component, OnInit } from '@angular/core';
import { NoticiaModel } from './noticia.model';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
noticia: NoticiaModel = new NoticiaModel();
noticias: Array<any> = new Array();


  constructor(private NoticiasService: NoticiasService) { }

  ngOnInit()  {

  this.listarNoticias();
  }

  // cadastrar() {
  //   this.NoticiasService.cadastrarNoticia().subscribe(noticia => { }, err => {console.log('erro ao cadastrar')})
  // }
  listarNoticias() {
    this.NoticiasService.listarNoticias().subscribe(noticias =>{
      this.noticias = noticias;
    }, err => {
      console.log('error ao listar as noticias', err);
    })
  }

}
