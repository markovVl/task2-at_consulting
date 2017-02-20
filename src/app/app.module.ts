import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {JsonpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';

import { AlbumDetailComponent } from './album-detail.component';
import { AlbumsComponent } from './albums.component';
import { AlbumService } from './album.service';




@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    JsonpModule
  ],
  declarations: [
    AppComponent,
    AlbumDetailComponent,
    AlbumsComponent,

  ],
  providers: [ AlbumService],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
