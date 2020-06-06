import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {

  otp;
  resetForm;
  showReset=false;
  forgetuser;
  otpsent = false;
  show = false;

    constructor(private http: HttpClient, private formBuilder: FormBuilder,
       private userservice:UserService, private router: Router ) { }

    ngOnInit() 
    {
      this.initForms();
    }

    initForms()
    {
      this.resetForm=this.formBuilder.group({
      otp:['',Validators.required],
      password:['',[Validators.minLength(5), Validators.required]],
      confirm:''
        }, {validation: this.matchPassword('new','confirm')})
    }
    
    sendOTP(email){
      this.showReset=true;
      this.otp=Math.floor(1000+Math.random()*9000)
      this.userservice.getUserByEmail(email).subscribe(data => {
        this.forgetuser = data;

        if(this.forgetuser){
          console.log(this.forgetuser);
          console.log(this.otp);
          this.sendMail({from: 'divyagulwti@gmail.com',
          to: email,
          message:` Your OTP for reseting password is ${this.otp}`})
          .subscribe((data) =>
          {
            console.log(this.otp);
            this.otpsent = true;
            this.show = true;
          })
        }else{
          Swal.fire({
            icon : 'error',
            title : 'Not Found',
            text : 'No user found with this email'
          })
        }
      })
      
    }
    
  sendMail(data){
    return this.http.post('http://localhost:3000/util/sendmail', data);
  }
  matchPassword(password,confirm_pass){
    return (userform)=> {
      let passControl=userform.controls[password];
      let confirmControl=userform.controls[confirm_pass];

      if(passControl.value !==confirmControl.value)
      {
        confirmControl.setErrors({match:true})
      }
      }
    }


    resetPassword(formdata){

      if(this.resetForm.invalid){
        console.log(formdata)
        return;

      }

      console.log(formdata.otp)
      if(this.otp == formdata.otp)
      { 
        console.log("Correct OTP");
        this.userservice.updateUser(this.forgetuser._id, {password : formdata.password}
          ).subscribe(data => {
        console.log(data);
        this.sendMail({from: 'divyagulwti@gmail.com',
          to: this.forgetuser.email,
          message:`Hello ${this.forgetuser.name}, your new Password is ${formdata.password}`})
          .subscribe((data) =>
          {
            console.log(this.otp);
          })

          Swal.fire({
            icon : 'success',
            title : 'Success',
            text : 'Your have successfully reset your password!!'
          }).then(() => {
            this.router.navigate(['/login']);
          })
      })
        return;
      }
      Swal.fire({
        'icon' : 'error',
        'title' : 'Error',
        'text' : 'Invalid Otp!!'
      })
  }

    getControls(){
      return this.resetForm.controls;
    }

}
