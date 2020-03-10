import { Injectable } from '@angular/core';
import {environment} from './../../environments/environment';
import { throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {retry, catchError} from 'rxjs/operators';

@Injectable()
export class RmsShowService {

  constructor(private _http: HttpClient) { 
  }

  getAllFilterList(){
    let filter = [
      {
        name: 'Species',
        items:[{name:'Human',selected:false}, {name:'Mytholog',selected:false},{name:'Other Species',selected:false}]
      },
      {
        name:'Gender',
        items:[{name:'Male',selected:false},{name:'Female',selected:false}]
      },
      {
        name: 'Origin',
        items:[{name:'Unknown',selected:false},{name:'Post Apocalyptic Earth',selected:false}, {name:'Nuptia 4',selected:false},{name:'Other Origins',selected:false}]
      }
    ]
    return filter;
  }
  getAllCharacters(page:number,query:string){

    let queryString = query.length > 0 ? (page+query) :page;
    return this._http.get(environment.url+'character?page='+queryString).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  getShowData(){
    return this._http.get(environment.url+'character/').pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `Error: ${error.error.message}`;
    } else {
        // server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
}
}
