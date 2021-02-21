import { Component, OnInit } from '@angular/core';
import { VideoService} from '../video.service';
import { VideoInterface } from '../Interface/videoInterface';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-videocomponent',
  templateUrl: './videocomponent.component.html',
  styleUrls: ['./videocomponent.component.scss']
})
export class VideocomponentComponent implements OnInit {

  selectedVideo !: VideoInterface;
  listVideo: VideoInterface[];
  lienVideoAct;
  constructor(private videoService: VideoService ,  private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    console.log('Bonjour Mr');
    this.showVideo();
  }
  getSafeUrl(url): SafeResourceUrl{
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  // tslint:disable-next-line:typedef
  showVideo(){
    this.videoService.getVideo().subscribe((data: VideoInterface ) => {
      console.log(data);
      // @ts-ignore
      this.listVideo = data;
      this.selectedVideo = this.listVideo[this.listVideo.length - 1];
      this.lienVideoAct = this.getSafeUrl(this.selectedVideo.lien);
      console.log('la video actuelle est : ' + this.lienVideoAct);
    });
  }
  // tslint:disable-next-line:typedef
  selectVideo(video: VideoInterface){
    this.selectedVideo = video;
    this.lienVideoAct = this.getSafeUrl(this.selectedVideo.lien);
  }

}
