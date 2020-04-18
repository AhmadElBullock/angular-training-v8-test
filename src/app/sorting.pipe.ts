import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(videos: any, videoSort: any[]): any {
    /* const videosSorted:[] =[]
    for (const video of videos) {
      if(true) {

      }
      videosSorted.push(video.view.sort()); */
    } 

  }