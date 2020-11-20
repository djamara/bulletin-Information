import { Component, OnInit } from '@angular/core';
import { VideoService, VideoInterface} from '../video.service';

@Component({
  selector: 'app-videocomponent',
  templateUrl: './videocomponent.component.html',
  styleUrls: ['./videocomponent.component.scss']
})
export class VideocomponentComponent implements OnInit {
  videoInterface: VideoInterface;
  listVideo = [];
  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    console.log('Bonjour Mr');
    this.showVideo();
  }

  // tslint:disable-next-line:typedef
  showVideo(){
    this.videoService.getVideo().subscribe((data: any[] ) => {
      console.log(data);
      this.listVideo = data;
    });
  }


}
