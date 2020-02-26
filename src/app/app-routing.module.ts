import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    redirectTo:'rmsshow',
    pathMatch:'full'
  },
  {
    path:'rmsshow',
    loadChildren: ()=> import('./rms-show/rms-show.module').then(m=> m.RmsShowModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
