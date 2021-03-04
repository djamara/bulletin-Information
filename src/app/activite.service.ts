import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {

  constructor(private http: HttpClient) { }

  private activiteUrl = 'http://localhost:8000/api/activite';
  private activiteByMonthUrl = 'http://localhost:8000/api/ActiviteByMonth';
  private activiteByMonthByProjetUrl = 'http://localhost:8000/api/ActiviteByMonthByProjetID?id=';
  // tslint:disable-next-line:typedef
  getActivite() {
    return this.http.get(this.activiteUrl);
  }
  // tslint:disable-next-line:typedef
  getActiviteByMonth() {
    return this.http.get(this.activiteByMonthUrl);
  }
  // tslint:disable-next-line:typedef
  getActiviteByMonthByProjet(id){
    return this.http.get(this.activiteByMonthByProjetUrl + id);
  }
}
