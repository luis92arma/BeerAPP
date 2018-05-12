import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinEstilo'
})
export class SinEstiloPipe implements PipeTransform {

  transform(value: any): any {
    let noStyle:string = 'unknown'

    if(!value.style){
      return noStyle
    }

    return (value.style) ? value.style.name: noStyle;
  }

}
