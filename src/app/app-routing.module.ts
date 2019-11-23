import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full', 
    redirectTo: 'main'
  },
  {
    path: 'main',
    loadChildren: './modules/main/main.module#MainModule'
  },
  {
    path: 'select',
    loadChildren: './modules/select/select.module#SelectModule'
  },
  {
    path: 'slide',
    loadChildren: './modules/slide/slide.module#SlideModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
