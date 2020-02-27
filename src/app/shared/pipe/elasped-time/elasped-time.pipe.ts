import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elaspedTime'
})
export class ElaspedTimePipe implements PipeTransform {

  transform(data:string):string{
    return window['moment'](data).fromNow();
}

}
