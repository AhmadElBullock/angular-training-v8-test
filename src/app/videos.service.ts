import { Injectable, OnInit } from '@angular/core';
import { VIDEOS} from './VIDOES'
import { Video } from './video.interface';

@Injectable({
  providedIn: 'root'
})
export class VideosService implements OnInit {
  
  videos: Video[] = VIDEOS;
  videosByViews: Video[] = [];

  constructor() {}
  ngOnInit() {  }

  onSorting() {
    let videosByViews = this.videos.sort((v1,v2) => {
      if (v1.views > v2.views) {
          return 1;
      }
      if (v1.views < v2.views) {
          return -1;
      }
      return 0;
  });
  console.log(videosByViews)
  }

 







}
