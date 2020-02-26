import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FilterComponent } from './components/filter/filter.component';
@NgModule({
  declarations: [FilterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule
  ],
  exports:[
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    FilterComponent
  ]
})
export class SharedModule { }
