import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { AngularTokenService } from 'angular-token';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  constructor(private angularTokenService: AngularTokenService,
              private router: Router) {
  }

  login(userData: User){
    return new Promise((resolve, reject) => {
      this.angularTokenService.signIn({
        login: userData.email,
        password: userData.password
      }).subscribe(res => {
        resolve(true)
        console.log('auth response:', res);
      }, () => reject(false));
    });
  }

  signup(userData: User){
    return new Promise((resolve, reject) => {
      this.angularTokenService.registerAccount({
        login: userData.email,
        password: userData.password,
        passwordConfirmation: userData.password,
        name: userData.name
      }).subscribe(() => resolve(true), () => reject(false));
    })
  }

  onAuthStart(){
    //this.angularTokenService.signInOAuth('facebook');
  }

  onSignOut(){
    this.angularTokenService.signOut()
    .subscribe(() => this.router.navigate(['/']), err => console.log(err));
  }

}
