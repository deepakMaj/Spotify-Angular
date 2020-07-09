import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { AngularTokenService } from 'angular-token';
declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(private angularTokenService: AngularTokenService) {
    this.angularTokenService.validateToken()
    .subscribe(() => this.user = this.angularTokenService.currentUserData);
   }

  ngOnInit(): void {
    $('.segment').css('background', this.getRandomColor());
  }

  getRandomColor() {
    var o = Math.round, r = Math.random, s = 255;
    var colourOne = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + 0.1 + ')';
    return `linear-gradient(rgba(234, 226, 226, 0.1), ${colourOne})`;
  }

}
