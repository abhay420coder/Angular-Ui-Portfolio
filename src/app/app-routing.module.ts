import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultAngularComponent } from './shared/component/default-angular/default-angular.component';

const routes: Routes = [
  {
    path:'',
    component:DefaultAngularComponent
  },
  {
    path:'**',
    component:DefaultAngularComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
