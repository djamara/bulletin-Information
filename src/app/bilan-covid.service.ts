import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BilanCovidService {

  constructor(private http: HttpClient) { }

  bilanCovidUrl = 'http://localhost:8000/api/bilancovid';
  // tslint:disable-next-line:typedef
  getBilanCovid(){
    return this.http.get(this.bilanCovidUrl);
  }
}
