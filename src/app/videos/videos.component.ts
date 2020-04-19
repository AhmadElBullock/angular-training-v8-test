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
  viewsStatus: boolean = false; viewsClicked = false;
  likesStatus: boolean = false; likesClicked = false;
  sharesStatus: boolean = false; sharesClicked = false;


   
  constructor(private videosService: VideosService) { }

  ngOnInit() {
    this.videos = this.videosService.videos;
  }

  onViewsSort() {
    this.videosService.viewsSort();
    this.viewsClicked = true;
    this.viewsStatus = !this.viewsStatus;
    this.likesStatus = false; this.likesClicked = false;
    this.sharesStatus = false; this.sharesClicked = false;
  }

  onLikesSort() {
    this.videosService.likesSort();
    this.likesClicked = true;
    this.likesStatus = !this.likesStatus;
    this.viewsStatus = false; this.viewsClicked = false;
    this.sharesStatus = false; this.sharesClicked = false;
  }

  onSharesSort() {
    this.videosService.sharesSort();
    this.sharesClicked = true;
    this.sharesStatus = !this.sharesStatus;
    this.viewsStatus = false; this.viewsClicked = false;
    this.likesStatus = false; this.likesClicked = false;
  }

  test() {
    console.log(this.videosService.videos)
  }

}

