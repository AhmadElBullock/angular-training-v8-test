import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(videos: any, videoFilter: any, propName:string): any[] {
    //if (videos.length === 0 || videoFilter === '') {
    if (!videos || !videoFilter) {
      return videos;
    }
     const resultArray = [];
    for (const item of videos) {
      if (item[propName].toLowerCase() === videoFilter.toLowerCase()) {
        resultArray.push(item);
      }
    } 
    return resultArray;
    //return value.filter(ff => ff.parent_name.toLowerCase().indexOf(videoFilter.toLowerCase() !== -1))
  }


}
