import { Injectable, OnInit } from '@angular/core';
import { VIDEOS} from './VIDOES'
import { Video } from './video.interface';

@Injectable({
  providedIn: 'root'
})
export class VideosService implements OnInit {
  
  videos: Video[] = VIDEOS;
  allParent = [];
  allTitles = []
  uniqueParent = [];
  uniqueTitle = []
  videosByViewsToglle: boolean = true;
  videosByLikesToglle: boolean = true;
  videosBySharesToglle: boolean = true;

  constructor() {}
  ngOnInit() {  }

  unique() {
    for (let video of this.videos) {
      this.allParent.push(video.parent_name);
      this.allTitles.push(video.title)
    }
    this.uniqueParent = [...new Set(this.allParent)];
    this.uniqueTitle = [...new Set(this.allTitles)];
    //console.log(this.uniqueParent);
    //console.log(this.uniqueTitle);
  }

  viewsSort() {
    if(this.videosByViewsToglle) {
      this.videos.sort((v1,v2) => {
        if (v1.views > v2.views) {
            return -1;
        }
        if (v1.views < v2.views) {
            return 1;
        }
        return 0;
      });
      
    } else {
      this.videos.sort((v1,v2) => {
        if (v1.views > v2.views) {
            return 1;
        }
        if (v1.views < v2.views) {
            return -1;
        }
        return 0;
      });
    }
    this.videosByViewsToglle = !this.videosByViewsToglle;
    this.videosByLikesToglle = true; this.videosBySharesToglle = true;
    console.log(this.videos)
  }

  likesSort() {
    if(this.videosByLikesToglle) {
      this.videos.sort((v1,v2) => {
        if (v1.likes > v2.likes) {
            return -1;
        }
        if (v1.likes < v2.likes) {
            return 1;
        }
        return 0;
      });
      
    } else {
      this.videos.sort((v1,v2) => {
        if (v1.likes > v2.likes) {
            return 1;
        }
        if (v1.likes < v2.likes) {
            return -1;
        }
        return 0;
      });
    }
    this.videosByLikesToglle = !this.videosByLikesToglle;
    this.videosByViewsToglle = true; this.videosBySharesToglle = true;
  }

 
  sharesSort() {
    if(this.videosBySharesToglle) {
      this.videos.sort((v1,v2) => {
        if (v1.shares > v2.shares) {
            return -1;
        }
        if (v1.shares < v2.shares) {
            return 1;
        }
        return 0
      });
      
    } else {
      this.videos.sort((v1,v2) => {
        if (v1.shares > v2.shares) {
            return 1;
        }
        if (v1.shares < v2.shares) {
            return -1;
        }
        return 0
      });
    }
    this.videosBySharesToglle = !this.videosBySharesToglle;
    this.videosByViewsToglle = true; this.videosByLikesToglle = true;
  }
}
