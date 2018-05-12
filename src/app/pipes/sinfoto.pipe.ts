import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(value: any): any {
    let noImage = 'assets/image/NoImage.jpg';
    if(!value.labels){
      return noImage;
    }
    return (value.labels) ? value.labels.medium : noImage;
  }

}
