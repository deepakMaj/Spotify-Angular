import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  visible: boolean = true;

  constructor() {
    this.visible = true;
  }


}
