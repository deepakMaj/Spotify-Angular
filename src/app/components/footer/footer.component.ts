import { Component, OnInit } from '@angular/core';
import { PlayerFile, PlayerTheme, PlayerThemeLight, GsPlayerService } from 'gs-player';
import { AngularTokenService } from 'angular-token';
import { NavbarService } from '../../services/navbar.service';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public files: Array<PlayerFile> = [{
    name: '',
    url: ''
  }];
  file: any;
  track: any;
  public playerTheme: PlayerTheme;


  constructor(public angularTokenService: AngularTokenService,
              public navbarService: NavbarService,
              private spotifyService: SpotifyService,
              private playerService: GsPlayerService) {              
    this.playerTheme = PlayerThemeLight;
  }

  ngOnInit(): void {
    this.onPlay();
  }

  onPlay(){
    this.spotifyService.onSetPlay()
    .subscribe(id => {
      this.spotifyService.findTrack(id)
      .then(res => {
        this.track = res;
        this.files.push({
          url: this.track.preview_url,
          name: this.track.name,
          artist: this.track.album.artists[0].name,
          album: this.track.album.name});
        this.playerService.playStream(this.files[this.files.length-1].url).subscribe(() => {});
      })
      .catch(err => console.log(err));
    }, err => console.log(err));
  }

}
