import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { DefaultAngularComponent } from './component/default-angular/default-angular.component';



@NgModule({
  declarations: [
    SharedComponent,
    DefaultAngularComponent,

  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    DefaultAngularComponent,

  ]
})
export class SharedModule { }
