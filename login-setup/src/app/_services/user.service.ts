import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  catchError, map } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }


    register(user: User) {
        let url = "http://localhost:3000/create";
    
        return this.http.post(url, user).pipe(
          map((response: any) => {
            return response;
          }),
          catchError((error: any) => observableThrowError(error.error)));
      }

}