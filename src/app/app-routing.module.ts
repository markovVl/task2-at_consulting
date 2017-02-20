import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlbumDetailComponent } from './album-detail.component';
import { AlbumsComponent } from './albums.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'albums',
    pathMatch: 'full'
  },


  {
    path: 'albums',
    component: AlbumsComponent
  },



  {
      path: 'detail/:id',
      component: AlbumDetailComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
