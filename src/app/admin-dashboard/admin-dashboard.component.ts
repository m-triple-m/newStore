import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  users;
  orders;
  locations;
  showstats = true;
  showusers = false;
  showlocs = false;
  showorders = false;
  admin;

  constructor(public authservice:AuthService , private router:Router, private userservice: UserService,
    private orderService: OrderService) { }

  ngOnInit() {
    document.body.classList.add('bg-admin');
    this.admin = JSON.parse(sessionStorage.getItem('user'));

    this.userservice.getallusers().subscribe(data => {
      this.users = data;
    })
    this.orderService.getAllOrders().subscribe(data => {
      this.orders = data;
    })
    this.userservice.getallLocation().subscribe(data => {
      this.locations = data;
    })
    
  }
  // usercomponent(entry){
  //   if(entry == '01'){ this.router.navigate(['/reguser']);}
  //   if(entry == '02'){ this.router.navigate(['/regloc']);}
  //   if(entry == '03'){ this.router.navigate(['/place']);}
  //   if(entry == '04'){ this.router.navigate(['/stats']);}
  //   if(entry == '05'){ this.router.navigate(['/orders']);}
  // }

  toggleStats(){
    this.showstats = true;
    this.showusers = false;
    this.showlocs = false;
    this.showorders = false;
  }

  toggleUsers(){
    this.showstats = false;
    this.showusers = true;
    this.showlocs = false;
    this.showorders = false;
  }

  toggleLocs(){
    this.showstats = false;
    this.showusers = false;
    this.showlocs = true;
    this.showorders = false;
  }

  toggleOrders(){
    this.showstats = false;
    this.showusers = false;
    this.showlocs = false;
    this.showorders = true;
  }

  ngOnDestroy(){
    document.body.classList.remove('bg-admin');
  }

}
