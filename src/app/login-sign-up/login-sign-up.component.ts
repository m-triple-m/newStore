import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-sign-up',
  templateUrl: './login-sign-up.component.html',
  styleUrls: ['./login-sign-up.component.css']
})
export class LoginSignUpComponent implements OnInit {

  signup=false;
  loginform;
  user;
  submitted = false;
  userform;
  hide=true;
  message;
  selectedfile;
  imgURL;

  // services are called for user Authenticaton,fetching user details and for routing
  
  constructor(private formbuilder: FormBuilder, private authservice: AuthService, private userservice: UserService, 
    private router: Router) { }

  ngOnInit(): void {
     this.initSignupForm();
    this.initLoginForm();
    
  }
  

initSignupForm(){
    document.body.classList.add('bg-rg')
    this.userform= this.formbuilder.group({
      name : ["", [Validators.required, Validators.maxLength(20)]],
      username : ["", Validators.required],
      password : ["", [Validators.required, Validators.minLength(5)]],
      confirm : [""],
      email : ["", Validators.required],
      contact : [null, [Validators.required, Validators.minLength(7)]],
      age : [null, Validators.required],
      admin : false,
      created : new Date()
    },{ validator : this.matchPassword('password', 'confirm')}
    )

  }


  matchPassword(password, confirm_pass){
    return (userform) =>{
      let passControl = userform.controls[password];
      let confirmControl = userform.controls[confirm_pass];

      if(passControl.value !== confirmControl.value){
        confirmControl.setErrors({match: true})
      }else{
        confirmControl.setErrors(null)
      }
    }

  }



  initLoginForm(){
    // a formgroup is created by using the injected instance of formbuilder
    this.loginform = this.formbuilder.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    })
  }


  togglesignup(){
    this.signup=!this.signup;
  }

  loginsubmit(formdata){
    // the credentials of user are fetched into "userobj" through userservice and- 
    // -http request and stored in "logged_user"
    this.userservice.getByUsername(formdata.username).subscribe( userobj =>{
      let logged_user = userobj;
      console.log(logged_user)
      if(logged_user){
        // checks if the password of the user in the database is same as the one entered
        if(logged_user['password'] == formdata['password']){
          
          // session storage is created and converted to string to differentiate between user and admin
          sessionStorage.setItem('user', JSON.stringify(logged_user));
          // sessionStorage.setItem('admin', JSON.stringify(true));
          this.userservice.loggedin=true;
          if(logged_user['admin']){
            // if the login credentials belong to an admin then the page is routed to the admin dashboard
            this.router.navigate(['/admin-dashboard'])
            return;
          }
          else{
            // else the page is routed to the user dashboard
             this.router.navigate(['/home'])
             return;
          }
        }else{
          // if the password is not the same as in database, error is displayed
          Swal.fire({
            icon : 'error' ,
            title: 'Oops!',
            text: 'Your password is incorrect' ,
          })
        }
      }else{
        // if the username is wrong then error is displayed. The errors are same so that if an attempt to break into the-
        // -account is made, it can not be known exactly which credential is wrong
        Swal.fire({
          icon : 'error' ,
          title: 'Oops!',
          text: 'Your password is incorrect' ,
        })
      }
    })
  }

    returnControls1(name){
      // to show error messages if any detail is left blank
    return this.loginform.controls[name];
  }



// REGISTER

  userSubmit(formdata){
    this.submitted=true;
    console.log(this.userform.controls);
    if(!this.userform.valid){
      //alert("Invalid form")
      return;
    }
    this.userservice.getByUsername(formdata.username).subscribe( data => {
      if(!data){
        // formdata.image= this.avatarName;
        this.userservice.addUser(formdata).subscribe(response=> {

          console.log(response);
          
          
          this.signup=false; 
         });

      } else{
        Swal.fire({
          icon : 'error' ,
          title: 'Oops!',
          text: 'Username already exists!' ,
        })
      }

    })
  }

  
  // uploadImage(event)
  // {
  //   let files = event.target.files;
  //   if(files.length===0)
  //     return;

  //   var mimeType=files[0].type;
  //   if(mimeType.match(/image\/*/)==null)
  //   { 
  //     Swal.fire("Images Only");
  //     return;
  //   }
  //   this.preview(event.target.files)
  //   let formData=new FormData();
  //   this.selectedfile=files[0];
  //   this.avatarName=this.selectedfile.name;
  //   console.log(this.avatarName);
  //   formData.append('image', this.selectedfile, this.selectedfile.name);
  //   this.userservice.uploadImage(formData).subscribe(response=>
  //     {
  //     console.log(response['message'])
  //     })
  // }
 
  // preview(files) {
  //   if (files.length === 0)
  //     return;
 
  //   var mimeType = files[0].type;
  //   if (mimeType.match(/image\/*/) == null) {
  //     this.message = "Only images are supported.";
  //     return;
  //   }
 
  //   var reader = new FileReader();
  //   reader.readAsDataURL(files[0]);
  //   reader.onload = (_event) => { 
  //     this.imgURL = reader.result;
  //   }
  // }

  returnControls(){
    return this.userform.controls;
  }
  
  ngOnDestroy(){
    document.body.classList.remove('bg-rg')
  }
}
