import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CHIPMODEL } from '../../model/chip.model';

@Component({
  selector: 'rms-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {
@Input()chipsInput:CHIPMODEL;

@Output()removeFilter:EventEmitter<CHIPMODEL> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  removeChip(){
      this.removeFilter.emit(this.chipsInput)
  }
}
