import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logged_user;
  loginform;
  constructor( userService:UserService,private router:Router,private formBuilder:FormBuilder, public authservice:AuthService) { }

  ngOnInit() {
    document.body.classList.add("bg-place1")
    this.initform();
  }

  initform(){
    this.loginform=this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnDestroy(){
    document.body.classList.remove("bg-place1");
  }

  loginSubmit(formdata){
    this.authservice.getUser(formdata.username).subscribe(userobj =>{
     this.logged_user = userobj;
     if(this.logged_user){
       if(this.logged_user.password == formdata.password){
         sessionStorage.setItem("user",JSON.stringify(this.logged_user));
         this.authservice.setLogin();
         console.log("login sucess");
         if(!this.logged_user.admin)
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
  getcontrol(name){
    return this.loginform.controls[name];
  }
} 
