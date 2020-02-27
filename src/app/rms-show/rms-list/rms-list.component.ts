import { Component, OnInit } from '@angular/core';
import { RmsShowService } from '../rms-show.service';
import {Page, Character, FILTER} from './../models/models';
import { CHIPMODEL } from 'src/app/shared/model/chip.model';

@Component({
  selector: 'rms-rms-list',
  templateUrl: './rms-list.component.html',
  styleUrls: ['./rms-list.component.scss']
})
export class RmsListComponent implements OnInit {
  page:Page = {
    count:0,
    currentpage:1,
    pages:0,
    perPage:20
  };
  allCharacters: any[];
  filterList:FILTER[];
  selectedFilter: CHIPMODEL[]=[];
  constructor(private _rmsService: RmsShowService) { }

  ngOnInit(): void {
    this.filterList = this._rmsService.getAllFilterList();
    this.getAllCharacters(1)
  }

  getAllCharacters(page:number){
    this._rmsService.getAllChjaracters(page).subscribe(
      (res:{info:any,results:Character[]})=>{
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
    let index = this.selectedFilter.findIndex(sFilter=> sFilter.item === evt.item);
    if(index === -1){
      this.selectedFilter.push(evt);
    }else{
      console.log(this.selectedFilter[index])
     let mainCat =  this.filterList.find(item=> item.name === this.selectedFilter[index].name.name);
     let subItem = mainCat.items.find(sItem=> sItem.name === this.selectedFilter[index].item.name);
     subItem.selected = false;
      this.selectedFilter.splice(index,1);

    }
  }

  goToPage(evt){
    console.log(evt)
    this.page.currentpage = evt;
    console.log(this.page)
    this.getAllCharacters(this.page.currentpage);
  }
}
