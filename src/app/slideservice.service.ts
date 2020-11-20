import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SlideserviceService {

  constructor(private http: HttpClient) { }

  slideUrl = 'http://localhost:8000/api/image';
  // tslint:disable-next-line:typedef
  getSlide(){
    return this.http.get(this.slideUrl);
  }
}
