import { Injectable, OnInit } from '@angular/core';
import { AllVideosService } from './all-videos.service';

@Injectable({
  providedIn: 'root'
})
export class SortingService implements OnInit {
  rawVideos = [];
  sortedVideos = [];
  constructor(private allVideos: AllVideosService) { }

  ngOnInit() {
    this.rawVideos = this.allVideos.videos;
    for(const video of this.rawVideos) {
      video.views.sort();
      
    } 
  }

  
}
