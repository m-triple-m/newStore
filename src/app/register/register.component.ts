import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userform;
  avatarName;
  hide = true;

  constructor(private formBuilder:FormBuilder,private userService:UserService , private router:Router) { }

  ngOnInit() {
    
    document.body.classList.add("bg-place2")
    this.initform();
  }

  initform(){
    this.userform=this.formBuilder.group({
      username:['', Validators.required],
      password:['', Validators.required],
      confirm:['', Validators.required],
      mobile:['', Validators.required],
      name:['', Validators.required],
      email:['', Validators.required],
      address:['', Validators.required],
      pincode:['', Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      admin:false,
      created:new Date(),
    }, {validator : this.matchPassword('password','confirm')}
      
    )
  }

  matchPassword(password,confirm_pass)
    {
      return (userform)=> 
      {
        let passControl=userform.controls[password];
        let confirmControl=userform.controls[confirm_pass];
        if(passControl.value !==confirmControl.value)
        {
          confirmControl.setErrors({match:true})
        }
      }
    }

  ngOnDestroy(){
    document.body.classList.remove("bg-place2");
  }
  userSubmit(formdata){
    
    console.log(this.userform.controls)
    if(!this.userform.value){
      alert('Invalid Form')
      return ;
    }
    formdata.avatar=this.avatarName;
    this.userService.addUser(formdata).subscribe((res)=>{
      console.log(res);
      
    })
    Swal.fire({
      icon: 'success',
      title: 'Registered Successfully',
      text: 'You may now login to continue'
    })
    .then( () => {
      this.router.navigate(['/login']);
    })
    

  }
  getcontrols(){
    
    return this.userform.controls;
  }

}
