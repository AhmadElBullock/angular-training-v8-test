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
  viewsStatus: boolean = true; viewsClicked = false;
  likesStatus: boolean = true; likesClicked = false;
  sharesStatus: boolean = true; sharesClicked = false;


   
  constructor(private videosService: VideosService) { }

  ngOnInit() {
    this.videos = this.videosService.videos;
  }

  onViewsSort() {
    this.videosService.viewsSort();
    this.viewsClicked = true;
    this.viewsStatus = !this.viewsStatus;
    this.likesStatus = true; this.likesClicked = false;
    this.sharesStatus = true; this.sharesClicked = false;
  }

  onLikesSort() {
    this.videosService.likesSort();
    this.likesClicked = true;
    this.likesStatus = !this.likesStatus;
    this.viewsStatus = true; this.viewsClicked = false;
    this.sharesStatus = true; this.sharesClicked = false;
  }

  onSharesSort() {
    this.videosService.likesSort();
    this.sharesClicked = true;
    this.sharesStatus = !this.sharesStatus;
    this.viewsStatus = true; this.viewsClicked = false;
    this.likesStatus = true; this.likesClicked = false;
  }

  test() {
    console.log(this.videosService.videos)
  }

}

