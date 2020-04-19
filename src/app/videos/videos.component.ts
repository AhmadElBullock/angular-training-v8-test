import { Component, OnInit } from '@angular/core';
import { Video } from '../video.interface';
import { VIDEOS} from '../VIDOES'
import { VideosService } from '../videos.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
videos: Video[];
   
  constructor(private videosService: VideosService) { }

  ngOnInit() {
    this.videos = this.videosService.videos;
  }

  onViewsSort() {
    //this.videosService.ngOnInit()
    this.videosService.viewsSort()
  }

  test() {
    console.log(this.videosService.videos)
  }

}

