import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultAngularComponent } from './shared/component/default-angular/default-angular.component';
import { PagenotfoundComponentComponent } from './pagenotfound-component/pagenotfound-component.component';

const routes: Routes = [
  { path: '',  redirectTo: "default",  pathMatch: "full" },
  { path:'default', component:DefaultAngularComponent, data: { title: "Default App" } },
  {
    path:'abhay',
    loadChildren: ()=> import('src/app/module/module.module').then(m=>m.ModuleModule),
  },
  {
    path:'**',
    component:PagenotfoundComponentComponent,
    data: { title: "Wrong Path" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
