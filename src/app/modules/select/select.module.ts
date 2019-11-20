import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectComponent } from './select.component';
import { SelectRoutingModule } from './select-routing.module';

@NgModule({
  declarations: [SelectComponent],
  imports: [
    CommonModule,
    SelectRoutingModule
  ]
})
export class SelectModule { }
