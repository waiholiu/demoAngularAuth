import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { AuthenticationService } from './authentication.service';


@Injectable()
export class GetvalueService {

  constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }

    getValue(): Observable<string[]> {
        // add authorization header with jwt token
        console.log (this.authenticationService.getToken());
        let headers = new Headers({ 'Authorization': 'bearer ' + this.authenticationService.getToken() });
        let options = new RequestOptions({ headers: headers });
 
        // get users from api
        return this.http.get('http://testbasicauth20170222085409.azurewebsites.net/api/values', options)
            .map((response: Response) => response.json());
    }


}
