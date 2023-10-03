import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './portfolio/home/home.component';
import { ContactUsComponent } from './portfolio/contact-us/contact-us.component';
import { AboutComponent } from './portfolio/about/about.component';
import { ServicesComponent } from './portfolio/services/services.component';

const routes: Routes = [
  {path:"home" , component:HomeComponent , data: { title: "Home" }},
  {path:"contact-us" , component:ContactUsComponent , data: { title: "Contact - Us" }},
  {path:"about" , component:AboutComponent , data: { title: "About Me" }},
  {path:"services" , component:ServicesComponent , data: { title: "Our Services" }},
  {path: '',  redirectTo: "home",  pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
