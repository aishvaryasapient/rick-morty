import { Injectable } from '@angular/core';
import {environment} from './../../environments/environment';
import { throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {retry, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RmsShowService {

  constructor(private _http: HttpClient) { 
    console.log(environment.url)
  }

  getAllFilterList(){
    let filter = [
      {
        name: 'Species',
        items:['Human', 'Mytholog','Other Species']
      },
      {
        name:'Gender',
        items:['Male','Female']
      },
      {
        name: 'Origin',
        items:['Unknown','Post Apocalyptic Earth', 'Nuptia 4','Other Origins']
      }
    ]
    return filter;
  }
  getAllChjaracters(page:number){
    console.log('djfkjdsfkdsjfgdsghfdsgfhgkfdhghfdk',environment.url)
    return this._http.get(environment.url+'character?page='+page).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  handleError(error) {
    console.log(error)
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `Error: ${error.error.message}`;
    } else {
        // server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
}
}
