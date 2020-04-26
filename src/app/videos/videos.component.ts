import { Component, OnInit } from '@angular/core';
import { Video } from '../video.interface';
import { VideosService } from '../videos.service';
import { NgxSpinnerService } from 'ngx-spinner';

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
  parents = [];
  titles = [];
   
  constructor(private videosService: VideosService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.videos = this.videosService.videos;
    this.videosService.unique();
    this.parents = this.videosService.uniqueParent;
    this.titles = this.videosService.uniqueTitle;
  }

  onScroll() {
    console.log('scrolled!!');
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

}

