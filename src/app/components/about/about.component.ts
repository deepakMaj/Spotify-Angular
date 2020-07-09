import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service'; 
declare var $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private navbarService: NavbarService) {
    this.navbarService.visible = true;
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
