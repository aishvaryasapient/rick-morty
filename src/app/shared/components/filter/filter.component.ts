import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rms-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
@Input()filterList:any[];
@Output() filterChange: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  toggleFilter(f,item){
    let data = {
      name:f,
      item:item
    }
    this.filterChange.emit(data)
  }
}
