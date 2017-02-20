import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Album } from './album';
import { Photo } from './photo';

@Injectable()
export class AlbumService {
  private photoUrl = 'http://jsonplaceholder.typicode.com/photos?albumId=';
  private albumsUrl = 'http://jsonplaceholder.typicode.com/albums';


  constructor(private http: Http) { }

  getAlbums() {
    return fetch(this.albumsUrl).then((response) => {
      return response.json();
    });
  }

  getPhotos(id: string) {
    return fetch(this.photoUrl + id).then((response) => {
      return response.json();
    });
  }


}
