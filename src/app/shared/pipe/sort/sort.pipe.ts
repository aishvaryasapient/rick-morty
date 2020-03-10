import { Pipe, PipeTransform } from '@angular/core';
interface Comparer{
  (p1: any, p2: any): number
}
@Pipe({
  name: 'sort',
  pure: true
})
export class SortPipe implements PipeTransform {
  private getComparer(attrName) : Comparer {
    return function compareByCost(p1 : any, p2 : any) : number {
        if (p1[attrName] < p2[attrName]) return -1;
        if (p1[attrName] > p2[attrName]) return 1;
        return 0;
    }
}

private getDescendigComparer(comparer) : Comparer {
    return function (p1 : any, p2 : any) : number {
        return comparer(p1, p2) * -1;
    }
}
transform(data : any[], ...args : any[] ){
  let attrName = args[0];
  let sort = args[1]
    if (!data || !data.length || !attrName) return data;
    // let comparer = this.getComparer(attrName);
    // if (isDesc)
    //     comparer = this.getDescendigComparer(comparer);
   
    data.sort((p1:any,p2:any)=>{
      
        if (p1[attrName] < p2[attrName]) return  sort === 'desc' ? 1:-1;
        if (p1[attrName] > p2[attrName]) return sort === 'desc' ? -1:1;
        return 0;
       
    });
    return data;
}
}
