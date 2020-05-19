import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url="http://localhost:3000/user"
  loggedin=false;
  constructor( private http:HttpClient,private router : Router) { 
    if(sessionStorage.getItem('user')){
      this.loggedin=true;
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
    this.router.navigate(['/login']);
  }
}
