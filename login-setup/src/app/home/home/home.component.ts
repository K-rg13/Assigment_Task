import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../_models';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: User[] = [];

  constructor(
    private Route: ActivatedRoute,

  ) { 
  }

  ngOnInit() {
    this.loadAllUsers();
  }



 loadAllUsers() {
    window.history.replaceState({}, "Hide", '/home');
    this.Route.queryParams.subscribe((params) => {
      this.users = JSON.parse(params.User_Details)
      
    })
    console.log("this.users",this.users)

}

}
