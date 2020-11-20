import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BilanActiviteService {

  constructor(private http: HttpClient) { }

  private bilanACtivite = 'http://localhost:8000/api/bilanactivite';

  // tslint:disable-next-line:typedef
  getBilanActivite(){
    return this.http.get(this.bilanACtivite);
  }
}
