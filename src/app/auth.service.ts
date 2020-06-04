import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url="http://localhost:3000/user";
  isadmin = false;
  loggedin=false;
  currentUser;
  constructor( private http:HttpClient,private router : Router) { 
    if(sessionStorage.getItem('user')){
      this.loggedin=true;
    }

    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
    if(this.currentUser)
      if(this.currentUser.admin){
        this.isadmin = true;
      }
  }


  getUser(username){
     return this.http.get(this.url+`/getbyusername/${username}`);
  }
  setLogin(){
    this.loggedin=true;
  }
  logout(){
    console.log("logged out")
    sessionStorage.removeItem('user');
    this.loggedin=false;
    this.isadmin = false;
    this.router.navigate(['/signup']);
  }
}
