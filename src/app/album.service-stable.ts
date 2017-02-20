import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Album } from './album';

@Injectable()
export class AlbumService {
  private albumsUrl = 'api/albums';

  constructor(private http: Http) { }

  getAlbums(): Promise<Album[]> {
    return this.http.get(this.albumsUrl).toPromise()
      .then(response => response.json().data as Album[]).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getAlbum(id: number): Promise<Album> {
    const url = `${this.albumsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Album)
      . catch(this.handleError);
  }
}
