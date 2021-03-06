import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlideComponent } from './slide.component';
import { SlideRoutingModule } from './slide-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SlideComponent],
  imports: [
    CommonModule,
    SlideRoutingModule,
    SharedModule
  ]
})
export class SlideModule { }
