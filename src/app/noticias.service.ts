import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  listarNoticias() : Observable<any> {
    return this.http.get("https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/post");
  }
   }
