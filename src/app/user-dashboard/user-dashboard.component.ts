import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  showOrders = true;
  showEditform = false;
  showPackages = false;
  
  user;

  constructor() { }

  ngOnInit(): void {

    this.user = JSON.parse(sessionStorage.getItem('user'));
  }

  toggleShowOrders(){
    this.hideall();
    this.showOrders = true;
  }

  toggleEditform(){
    this.hideall();
    this.showEditform = true;
  }

  togglePackages(){
    this.hideall();
    this.showPackages = true;
  }
  

  hideall(){
    this.showOrders = false;
    this.showEditform = false;
    this.showPackages = false;
  }

}
