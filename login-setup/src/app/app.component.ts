import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
      private router: Router,
    private cookies:CookieService

  ) {
  }

  logout() {
      this.router.navigate(['/login']);
      this.cookies.put('User', JSON.stringify(false));
  }
  checkCookie(){
    return this.cookies.getObject('User')
    
   
  }
}
