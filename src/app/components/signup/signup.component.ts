import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { User } from '../../models/User';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = {
    name: '',
    email: '',
    password: '',
    emailAgain: ''
  }
  isVisible: boolean = false;

  constructor(private navbarService: NavbarService,
              private flashMessages: FlashMessagesService,
              private authService: AuthService,
              private router: Router,
              private angularTokenService: AngularTokenService) { 
    this.navbarService.visible = false;
    this.isVisible = true;
  }

  ngOnInit(): void {
    if(this.angularTokenService.userSignedIn()){
      this.router.navigate(['/']);
  }
  }

  onSignupClick({value, valid} : {value: User, valid: boolean}){
    if(!valid){
      this.flashMessages.show('Something went wrong!! Try again later', {cssClass: 'ui negative message', timeout: 4000});
    } else{
      this.authService.signup(value)
      .then(() => {
        this.flashMessages.show('You have successfully signed up!! Login to Spotify', {cssClass: 'ui positive message', timeout: 4000});
        document.getElementById('signup').classList.remove('loading');
        this.router.navigate(['/login']);
      }).catch(() => {
        this.flashMessages.show('Something went wrong!! Try again later', {cssClass: 'ui negative message', timeout: 4000});
        document.getElementById('signup').classList.remove('loading');
      });
    }
  }

  addLoading(){
    document.getElementById('signup').classList.add('loading');
  }

}
