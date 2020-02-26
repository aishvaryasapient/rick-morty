import { Component, OnInit } from '@angular/core';
import { RmsShowService } from '../rms-show.service';
import {Page, Character, FILTER} from './../models/models';

@Component({
  selector: 'rms-rms-list',
  templateUrl: './rms-list.component.html',
  styleUrls: ['./rms-list.component.scss']
})
export class RmsListComponent implements OnInit {
  page:Page = {
    count: 0,
    currentpage:1,
    pages:0
  };
  allCharacters: any[];
  filterList:FILTER[];
  selectedFilter: any[]=[];
  constructor(private _rmsService: RmsShowService) { }

  ngOnInit(): void {
    this.filterList = this._rmsService.getAllFilterList();
    this.getAllCharacters(this.page.currentpage);
  }

  getAllCharacters(page:number){
    this._rmsService.getAllChjaracters(page).subscribe(
      (res:{info:any,results:Character[]})=>{
        console.log(res);
        this.page.count = res.info.count;
        this.page.pages = res.info.pages;
        this.allCharacters = res.results;
      },
      err=>{
        console.log(err);
      }
    )
  }
  filterChange(evt){
    console.log(evt);
    this.selectedFilter.push(evt)
  }

}
