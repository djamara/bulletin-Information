import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {

  constructor(private http: HttpClient) { }

  private activiteUrl = environment.serveur_name + 'activite';
  private activiteByMonthUrl = environment.serveur_name + 'ActiviteByMonth';
  private activiteByMonthByProjetUrl = environment.serveur_name + 'ActiviteByMonthByProjetID?id=';
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
