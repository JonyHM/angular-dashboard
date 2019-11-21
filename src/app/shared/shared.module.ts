import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { RegisterService } from './register/service/register.service';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    MaterialModule
  ],
  providers: [
    RegisterService
  ]
})
export class SharedModule { }
