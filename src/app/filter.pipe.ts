import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(videos: any, videoFilter: any, propName:string): any[] {
    //if (!videos) return [];
    //if (!videoFilter) return videos;
    
    /*  const resultArray = [];
    for (const item of videos) {
      if (item[propName].toLowerCase() === videoFilter.toLowerCase()) {
        resultArray.push(item);
      }
    } 
    return resultArray; */
    
    /* return videos.filter(singleItem =>
      singleItem[propName].toLowerCase().startsWith(videoFilter.toLowerCase())
      ); */
         //return value.filter(ff => ff.parent_name.toLowerCase().indexOf(videoFilter.toLowerCase() !== -1))

      //TAKEN
         if (!videoFilter){
        return videos;
      }
       if (!Array.isArray(videos)){
        return videos;
      }
       if (videoFilter && Array.isArray(videos)) {
        let filterKeys = Object.keys(videoFilter);
           if (propName) {
          return videos.filter(item =>
              filterKeys.reduce((x, keyName) =>
                  (x && new RegExp(videoFilter[keyName], 'gi').test(item[keyName])) || videoFilter[keyName] == "", true));
        }
       else {
         return videos.filter(item => {
           return filterKeys.some((keyName) => {
             return new RegExp(videoFilter[keyName], 'gi').test(item[keyName]) || videoFilter[keyName] == "";
           });
         });
       }
      }
    }
}