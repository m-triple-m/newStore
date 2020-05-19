import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {

  constructor(private http: HttpClient,private formBuilder:FormBuilder) { }
  otp;
  resetForm;
  showReset=false;
  show=false;
  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.resetForm = this.formBuilder.group({
      otp:[''],
      new:['',Validators.minLength(5)],
      confirm:['']},
      {validation: this.matchPassword('new','confirm')
    })
  }
  sendOTP(email){
    this.showReset=true;
    this.otp = Math.floor(1000+Math.random()*9000);
    this.sendmail({from:'divyagulwti@gmail.com',to:email,message:`Your Otp for resetting password is ${this.otp}`}).subscribe((data)=>{
      console.log(data);
      console.log(this.otp)
    })
  }
  sendmail(data){
    return this.http.post('http://localhost:3000/util/sendmail',data);
  }

  resetPassword(formdata){
    if(this.otp == formdata.otp){
      console.log("Correct OTP");
      this.show=true;
    }
    else{alert("invalid OTP");}
  }

  matchPassword(password,confirm_pass){
    return (userform)=>{
      let passControl=userform.controls[password];
      let confirmControl = userform.controls[confirm_pass];
      if(passControl.value !=confirmControl.value)
      {
        confirmControl.setErrors({match:true})
      }
    }
  }
}
