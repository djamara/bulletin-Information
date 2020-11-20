import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {

  constructor(private http: HttpClient) { }

  private activiteUrl = 'http://localhost:8000/api/activite';
  // tslint:disable-next-line:typedef
  getActivite() {
    return this.http.get(this.activiteUrl);
  }
}
