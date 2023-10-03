import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PortfolioComponent,
    ContactUsComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    RouterModule
  ]
})
export class PortfolioModule { }
