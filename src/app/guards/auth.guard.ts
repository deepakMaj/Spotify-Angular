import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AngularTokenService } from 'angular-token';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router,
              private angularTokenService: AngularTokenService) {}

  canActivate(): boolean{
    if(!this.angularTokenService.userSignedIn()){
      this.router.navigate(['/login']);
      return false;
    } else{
      return true;
    }
  }

}