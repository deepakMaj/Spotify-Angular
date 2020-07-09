import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { User } from '../../models/User';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AngularTokenService } from 'angular-token';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isVisible: boolean = false;
  user: User = {
    email: '',
    password: '',
  };

  constructor(private navbarService: NavbarService,
              private authService: AuthService,
              private flashMessages: FlashMessagesService,
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

  onLoginClick({value, valid} : {value: User, valid: boolean}){
    if(!valid){
      this.flashMessages.show('Something went wrong!! Try again later', {cssClass: 'ui negative message', timeout: 4000});
    } else{
      this.authService.login(value)
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch(() => {
        this.flashMessages.show('Invalid Credentials', {cssClass: 'ui negative message', timeout: 4000});
        document.getElementById('login').classList.remove('loading');
      });
    }
  }

  addLoading(){
    document.getElementById('login').classList.add('loading');
  }

  onAuthClick(){
    this.authService.onAuthStart();
  }

}
