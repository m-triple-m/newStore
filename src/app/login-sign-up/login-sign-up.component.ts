import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-sign-up',
  templateUrl: './login-sign-up.component.html',
  styleUrls: ['./login-sign-up.component.css']
})
export class LoginSignUpComponent implements OnInit {

  signup = false;
  logged_user;
  loginform;
  constructor(public authservice:AuthService,private router:Router) { }

  ngOnInit() {
  }
  loginSubmit(formdata){
    this.authservice.getUser(formdata.email).subscribe(userobj =>{
     this.logged_user = userobj;
     if(this.logged_user){
       if(this.logged_user.password == formdata.password){
         sessionStorage.setItem("user",JSON.stringify(this.logged_user));
         this.authservice.setLogin();
         console.log("login sucess");
         if(this.logged_user.admin == false)
         {
          this.router.navigate(['/dashboard']);
         }
         else{
          this.router.navigate(['/admin']);
         }
         return;
    
       }
     } 
     console.log("login Failed");
     alert("Invalid Username and Password")
    })
  }

  changepage(){
    this.signup = !this.signup;   
  }
}
