import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RmsListComponent } from './rms-list/rms-list.component';
import { RmsDetailComponent } from './rms-detail/rms-detail.component';


const routes: Routes = [
  {
    path:'',
    component: RmsListComponent
  },
  {
    path:':id',
    component: RmsDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RmsShowRoutingModule { }
