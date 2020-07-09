import { Component, OnInit, Input } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { SpotifyService } from '../../services/spotify.service';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTracks: any;
  searchAlbums: any;
  searchPlaylists: any;
  searchArtists: any;

  constructor(public navbarService: NavbarService,
              private spotifyService: SpotifyService,
              private angularTokenService: AngularTokenService) {
    this.navbarService.visible = true;
   }
   
  ngOnInit(): void {
    this.searchTracks = null;
    this.searchAlbums = null;
    this.searchPlaylists = null;
    this.searchArtists = null;
  }

  onClickPlay(id: string){
    this.spotifyService.setPlay(id);
  }

  getSearch(data: string){
    this.getSearchTracks(data);
    this.getSearchAlbums(data);
    this.getSearchArtists(data);
    this.getSearchPlaylists(data);
  }

  getSearchTracks(data: string){
    this.spotifyService.getSearchTracks(data)
    .then(res => {
      this.searchTracks = res;
    })
    .catch(err => this.searchTracks = null);
  }

  getSearchAlbums(data: string){
    this.spotifyService.getSearchAlbums(data)
    .then(res => {
      this.searchAlbums = res;
    })
    .catch(err => this.searchAlbums = null);
  }

  getSearchPlaylists(data: string){
    this.spotifyService.getSearchPlaylists(data)
    .then(res => {
      this.searchPlaylists = res;
      this.setHtml(this.searchPlaylists);
    })
    .catch(err => this.searchPlaylists = null);
  }

  getSearchArtists(data: string){
    this.spotifyService.getSearchArtists(data)
    .then(res => {
      this.searchArtists = res;
    })
    .catch(err => this.searchArtists = null);
  }

  setHtml(playlists: any){
    playlists.forEach(playlist => {
      playlist.description = playlist.description.replace(/(<([^>]+)>)/ig,"");
    });
  }
}
