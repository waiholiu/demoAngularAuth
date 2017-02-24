import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }
  from '@angular/forms';

import { AuthenticationService } from '../authentication.service';
import { GetvalueService } from '../getvalue.service';
import { RegisterRequest } from '../registerRequest';
 import {LocalStorage, StorageProperty, SessionStorage} from 'h5webstorage';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @StorageProperty({ storageKey: 'currentUser', storage: 'Local'}) public currentUser: string;
  
  @StorageProperty({ storageKey: 'secondKey', storage: 'Local'}) public secondKey2: string;

  secondKeyDescription : string;

  constructor(fb: FormBuilder, private _authenticationService: AuthenticationService,
    private getvalueService: GetvalueService, 
    private localStorage: LocalStorage, sessionStorage: SessionStorage) {
    this.newUserForm = fb.group({
      "email": ["", Validators.required],
      "password": ["", Validators.required],
      "confirmPassword" : ["", Validators.required],
      "gender": ""
    });

    // this.secondKey2 = this.localStorage["secondKey"];
    this.secondKeyDescription = this.secondKey2 + " ha";

  }

  newUserForm: FormGroup;
  isNewUser: boolean = false;

  testString : string;

  ngOnInit() {
    this.testString = "b";
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
    
    this.testString = this.testString + "a";

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
