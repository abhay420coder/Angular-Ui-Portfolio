import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { ModuleComponent } from './module.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ModuleComponent
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    RouterModule
  ]
})
export class ModuleModule { }
