import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-place',
  templateUrl: './register-place.component.html',
  styleUrls: ['./register-place.component.css']
})


export class RegisterPlaceComponent implements OnInit {

  locationform;
  selectedValue;
  states = ['U.P.', 'M.P.', 'Bihar', 'A. P.']
  constructor(private formBuilder:FormBuilder,private userService:UserService) { }

  ngOnInit() {
    this.initform();
    document.body.classList.add("bg-place");
    
  }
  ngOnDestroy(){
    document.body.classList.remove("bg-place");
  }

  initform(){
    this.locationform=this.formBuilder.group({
      state:['',Validators.required],
      city:['',Validators.required],
      address:['',Validators.required],
      pincode:['',Validators.required],
      area:['',Validators.required],
      price:['',Validators.required],
      locality:['',Validators.required  ]
    })
  }

  getControls(){
    return this.locationform.controls;
  }

  submit(formdata){
    console.log(this.locationform.controls)
    if(!this.locationform.value){
      alert('Invalid Form')
      return
    }
    
    this.userService.addLocation(formdata).subscribe((res)=>{
      Swal.fire({
        icon : 'success',
        title : 'Location Added!',
        text : 'new Location added successfully'
      }).then(() => {
        console.log(res);
        this.locationform.reset();
      })
    })

  }
}
