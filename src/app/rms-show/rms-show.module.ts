import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RmsShowRoutingModule } from './rms-show-routing.module';
import { RmsListComponent } from './rms-list/rms-list.component';
import { RmsDetailComponent } from './rms-detail/rms-detail.component';
import { SharedModule } from '../shared/shared.module';
import { RmsShowService } from './rms-show.service';
import { ShowResolver } from './show.resolver';


@NgModule({
  declarations: [RmsListComponent, RmsDetailComponent],
  imports: [
    CommonModule,
    RmsShowRoutingModule,
    SharedModule
  ],
  providers:[
    RmsShowService,
    ShowResolver
  ]
})
export class RmsShowModule { }
