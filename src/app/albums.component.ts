import { Component, OnInit } from '@angular/core';
import { Album } from './album';
import { AlbumService } from './album.service';
import { Router } from '@angular/router';



@Component({

  selector: 'my-albums',
  moduleId: module.id,
  templateUrl: './albums.component.html',
  styleUrls: [
    './albums.component.css'
  ],

})
export class AlbumsComponent implements OnInit{
  albums: Album[];
  selectedAlbum: Album;

  constructor(private AlbumService: AlbumService, private router: Router) { }



  getAlbums() {
    this.AlbumService.getAlbums().then((data) => {
      this.albums = data;
    }).catch((ex) => {
      console.log('Error fetching users', ex);
    });
  }



  ngOnInit(): void {
    this.getAlbums();
  }

  onSelect(album: Album): void {
    this.selectedAlbum = album;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedAlbum.id]);
  }
}
