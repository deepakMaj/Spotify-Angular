import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { SpotifyService } from '../../services/spotify.service';
import { AngularTokenService } from 'angular-token';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  playlists: any;
  albums: any;
  hidePlay: boolean = true;
  showLoading: boolean = true;
  loadingTime: number = 9000;

  constructor(private navbarService: NavbarService,
              private spotifyService: SpotifyService,
              private angularTokenService: AngularTokenService,
              private authService: AuthService) {
    this.navbarService.visible = true;
    this.getPlaylists();
    this.getAlbums();
  }

  ngOnInit(): void {
    setTimeout(() => this.showLoading = false, this.loadingTime);
    this.loadingTime = 6000;
  }

  getPlaylists(){
    this.spotifyService.getPlaylists()
    .then(res => {
      this.playlists = res;
      this.setHtml(this.playlists);
    })
    .catch(err => console.log(err));
  }

  setHtml(playlists: any){
    playlists.forEach(playlist => {
      playlist.description = playlist.description.replace(/(<([^>]+)>)/ig,"");
    });
  }

  getAlbums(){
    this.spotifyService.getAlbums()
    .then(res => {
      this.albums = res;
    })
    .catch(err => console.log(err));
  }


}
