import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { RegisterRequest } from './registerRequest';
import { LocalStorage, StorageProperty, SessionStorage } from 'h5webstorage';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http, private localStorage: LocalStorage, sessionStorage: SessionStorage) { }

  @StorageProperty({ storageKey: 'currentUser', storage: 'Local'}) public currentUser: string;

  test() {
    
    return this.http.post('http://testbasicauth20170222085409.azurewebsites.net/value', "")
      .map((response: Response) => {

      });

  }

  getUserName() : string {

    let store: any;
    store = this.currentUser;
    if (store) {
      return store.userName;
    }

  }

  getToken(): string {
    let store: any;
    store = this.localStorage.getItem('currentUser');
    if (store) {
      return store.access_token;
    }
  }

  login(username: string, password: string) {
    return this.http.post('http://testbasicauth20170222085409.azurewebsites.net/token', 
      "grant_type=password&username=" + username + "&password="  + password)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        if (user && user.access_token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }

  logout() {
    // remove user from local storage to log user out
    this.localStorage.removeItem('currentUser');
  }

  register(registerRequest: RegisterRequest) {
    return this.http.post('http://testbasicauth20170222085409.azurewebsites.net/api/account/register', registerRequest)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        console.log(response);
      });


  }



}
