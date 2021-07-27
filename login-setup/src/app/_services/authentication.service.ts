import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError } from 'rxjs';
import {  catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(private http: HttpClient) {
    }

    login(username: string, password: string) {
let data={
    Name : username,
    pass:password
    
}
        let url = "http://localhost:3000/login";
    
        return this.http.post(url, data).pipe(
          map((response: any) => {
            return response;
          }),
          catchError((error: any) => observableThrowError(error.error)));

    }

}