import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { RmsShowService } from './rms-show.service';

@Injectable()
export class ShowResolver implements Resolve<any>{
    constructor(private _showService: RmsShowService){}
    resolve(){
        return this._showService.getShowData()
    }
}