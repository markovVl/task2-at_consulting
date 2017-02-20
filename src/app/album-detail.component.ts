import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AlbumService } from './album.service';
import { Album } from './album';
import { Photo } from './photo';
import 'rxjs/add/operator/switchMap';


@Component({
  moduleId: module.id,
  selector: 'my-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: [
    './album-detail.component.css'
  ]

})
export class AlbumDetailComponent implements OnInit {
  albums: Photo[];

  constructor(
    private AlbumService: AlbumService,
    private route: ActivatedRoute,
    private location: Location,

  ) {

  }

  ngOnInit(): void {

this.getAlbums();

}

getAlbums() {
  this.AlbumService.getPhotos(this.route.snapshot.params['id']).then((data) => {
    this.albums = data;
  }).catch((ex) => {
    console.log('Error fetching users', ex);
  });
}


  goBack(): void {
    this.location.back();
  }
}
