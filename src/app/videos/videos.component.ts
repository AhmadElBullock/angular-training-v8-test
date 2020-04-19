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
  viewsStatus: boolean = true;
  likesStatus: boolean = true;
  sharesStatus: boolean = true;


   
  constructor(private videosService: VideosService) { }

  ngOnInit() {
    this.videos = this.videosService.videos;
  }

  onViewsSort() {
    this.videosService.viewsSort();
    this.viewsStatus = !this.viewsStatus
  }

  onLikesSort() {
    this.videosService.likesSort();
    this.likesStatus = !this.likesStatus
  }

  onSharesSort() {
    this.videosService.likesSort();
    this.sharesStatus = !this.sharesStatus
  }

  test() {
    console.log(this.videosService.videos)
  }

}

