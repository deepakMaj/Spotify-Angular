import { Component, OnInit } from '@angular/core';
import { AngularTokenService } from 'angular-token';
import { User } from '../../models/User';
import { FlashMessagesService } from 'angular2-flash-messages';
declare var $: any;

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User;
  isUpdateFormDisabled: boolean;

  constructor(private angularTokenService: AngularTokenService,
              private flashMessages: FlashMessagesService) {}

  ngOnInit(): void {
    this.isUpdateFormDisabled = true;
    this.angularTokenService.validateToken()
    .subscribe(() => this.user = this.angularTokenService.currentUserData);
  }

  onUpdateClick({value, valid}: {value: User, valid: boolean}){
    if(valid){
      this.angularTokenService.updatePassword({
        password: value.password,
        passwordConfirmation: value.password
      }).subscribe(() => {
        this.flashMessages.show('Password was updated successfully', {cssClass: 'ui positive message', timeout: 4000});
        this.isUpdateFormDisabled = true;
      });
    }
  }

  disableUpdateForm(){
    this.isUpdateFormDisabled = true;
  }

  enableUpdateForm(){
    this.isUpdateFormDisabled = false;
  }

}
