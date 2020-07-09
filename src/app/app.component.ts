import { Component, OnInit, EventEmitter } from '@angular/core';
import { NavbarService } from './services/navbar.service';
import { PlayerFile, PlayerTheme, PlayerThemeLight, GsPlayerService } from 'gs-player';
import { AngularTokenService } from 'angular-token';
import { Router } from '@angular/router';
import { SpotifyService } from './services/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Spotify';
  
  constructor(public navbarService: NavbarService,
              public angularTokenService: AngularTokenService,
              public router: Router) {
    this.navbarService.visible = true;
  }

}
