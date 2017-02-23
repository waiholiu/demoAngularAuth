import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {  RegisterRequest } from './registerRequest';
@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }

  test() {
    return this.http.post('http://testbasicauth20170222085409.azurewebsites.net/token', "")
      .map((response: Response) => {

      });

  }

  getToken(): string {
    let store: any;
    store = localStorage.getItem('currentUser');
    if (store) {
      return JSON.parse(store)["access_token"];
    }
  }

  login(username: string, password: string) {
    return this.http.post('http://testbasicauth20170222085409.azurewebsites.net/token', "grant_type=password&username=2@test.com&password=Sample1!")
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        if (user && user.access_token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  register(registerRequest : RegisterRequest) {
    return this.http.post('http://testbasicauth20170222085409.azurewebsites.net/api/account/register', registerRequest)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        console.log(response);
      });


  } 

  

}
