import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService, AuthenticationService } from '../../_services/';
import { CookieService } from 'ngx-cookie';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  constructor(
    private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
      private cookies:CookieService

  ) { 
  }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

      // convenience getter for easy access to form fields
      get f() { return this.loginForm.controls; }

      onSubmit() {
          this.submitted = true;
  
          // stop here if form is invalid
          if (this.loginForm.invalid) {
              return;
          }
  
          

          this.authenticationService.login(this.f.username.value, this.f.password.value)
              .subscribe(
                  data => {
                    console.log("this.returnUrl",this.returnUrl)
                    if(data) {
                      let navigationExtras: NavigationExtras = {
                        queryParams: {
                            "User_Details": JSON.stringify([data]),
                        },
                      };
                      this.router.navigate(['home'],navigationExtras);
                      this.cookies.put('User', JSON.stringify(true));
                    
                  }
                    else this.alertService.error("User not present")
                  },
                  error => {
                      this.alertService.error(error);
                  });
      }

}
