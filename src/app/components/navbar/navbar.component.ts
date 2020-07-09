import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AngularTokenService } from 'angular-token';
import { AuthService } from '../../services/auth.service';
import { User } from 'src/app/models/User';
import { NavbarService } from '../../services/navbar.service';
import { SpotifyService } from '../../services/spotify.service';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User = {
    name: ''
  };
  @Output() searchData: EventEmitter<string> = new EventEmitter();

  constructor(public router: Router,
              public angularTokenService: AngularTokenService,
              private authService: AuthService,
              private spotifyService: SpotifyService,
              private navbarService: NavbarService) {          
  }

  ngOnInit(): void {
    if(this.angularTokenService.userSignedIn()){
      this.angularTokenService.validateToken()
    .subscribe(() => this.user = this.angularTokenService.currentUserData);
    }
    $('.ui.dropdown').dropdown();
  }

  onSignOut(){
    this.authService.onSignOut();
    this.router.navigate(['/']);
  }

  search(data: string){
    this.searchData.emit(data);
  }

}
