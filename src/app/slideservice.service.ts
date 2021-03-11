import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SlideserviceService {

  constructor(private http: HttpClient) { }

  slideUrl = environment.serveur_name + 'image';
  // tslint:disable-next-line:typedef
  getSlide(){
    return this.http.get(this.slideUrl);
  }
}
