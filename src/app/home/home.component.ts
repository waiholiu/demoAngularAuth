import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }
  from '@angular/forms';

import { AuthenticationService } from '../authentication.service';
import { GetvalueService } from '../getvalue.service';
import { RegisterRequest } from '../registerRequest';
 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // @StorageProperty({ storageKey: 'currentUser', storage: 'Local'}) public currentUser: string;
  
  constructor(fb: FormBuilder, private _authenticationService: AuthenticationService,
    private getvalueService: GetvalueService) {
    this.newUserForm = fb.group({
      "email": ["", Validators.required],
      "password": ["", Validators.required],
      "confirmPassword" : ["", Validators.required],
      "gender": ""
    });


  }

  newUserForm: FormGroup;
  isNewUser: boolean = false;

  currentUser() : string {
      return this._authenticationService.getUserName();

  }

  isLoggedIn() : Boolean {
    return this._authenticationService.currentUser != null;
  }

  ngOnInit() {
    
  }

  onSubmitNewUserForm() {
    this._authenticationService.register(this.newUserForm.value)
      .subscribe();
    // console.log(this.newUserForm);
  }

  test() {

    this.getvalueService.getValue()
      .subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
  login() {
    
    this._authenticationService.login("user1", "Sample1!")
      .subscribe(
      data => { },
      error => {
        console.log(error);
      });
  }

  logout() {
    this._authenticationService.logout()


  }

}
