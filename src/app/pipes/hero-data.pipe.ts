import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroData',
  pure: false
})
export class HeroDataPipe implements PipeTransform {

  transform(value: any): any {
    let data = [];
    for(let key in value){
      data.push(key);
    }
    return data;
  }

}
