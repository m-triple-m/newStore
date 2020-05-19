import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name:String;
  logged_user;
  constructor(public authservice:AuthService) { 
    
    
   }

  ngOnInit() {
    console.log(new Date())
    console.log(sessionStorage.getItem('user'));
    
    this.logged_user=JSON.parse(sessionStorage.getItem('user'))
    
  }
  logout(){
    this.authservice.logout();

  }

}
