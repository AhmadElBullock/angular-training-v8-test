import { Component, OnInit } from '@angular/core';
import { Video } from '../video.interface';
import { VIDEOS} from '../VIDOES'

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
videos: Video[];
   
  constructor() { }

  ngOnInit() {
    this.videos = VIDEOS;
  }

}

