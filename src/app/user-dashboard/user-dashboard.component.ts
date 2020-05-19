import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  user;
  constructor() { }

  ngOnInit() {

    document.body.classList.add('user-dash');
    this.user = JSON.parse(sessionStorage.getItem('user'));
  }

  ngOnDestroy(){
    document.body.classList.remove('user-dash');
  }

}
