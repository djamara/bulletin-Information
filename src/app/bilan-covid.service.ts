import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BilanCovidService {

  constructor(private http: HttpClient) { }

  bilanCovidUrl = environment.serveur_name + 'bilancovid';
  // tslint:disable-next-line:typedef
  getBilanCovid(){
    return this.http.get(this.bilanCovidUrl);
  }
}
