import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RmsListComponent } from './rms-list/rms-list.component';
import { RmsDetailComponent } from './rms-detail/rms-detail.component';
import { ShowResolver } from './show.resolver';


const routes: Routes = [
  {
    path:'',
    component: RmsListComponent,
    resolve: {data:ShowResolver}
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
