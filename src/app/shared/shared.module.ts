import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { RegisterModule } from './register/register.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    RegisterModule
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    MaterialModule,
    RegisterModule
  ]
})
export class SharedModule { }
