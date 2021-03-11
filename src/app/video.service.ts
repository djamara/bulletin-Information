import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {environment} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) {

  }

  private videoUrl = environment.serveur_name + 'video';  // URL to web api

  /** GET video from the server */
  // tslint:disable-next-line:typedef
  getVideo() {
    return this.http.get(this.videoUrl);
  }

}
