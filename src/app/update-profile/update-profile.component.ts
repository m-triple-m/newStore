import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  editform;
  currentUser;
  constructor(private formbuilder: FormBuilder, private userservice: UserService) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
    this.initForm();
  }

  initForm(){
    this.editform = this.formbuilder.group(this.currentUser);
  }

  updateUser(formdata){
    this.userservice.updateUser(this.currentUser._id, formdata).subscribe(data => {
      console.log(data);
      this.currentUser = data;
      sessionStorage.setItem('user', JSON.stringify(this.currentUser));
      this.editform.reset();
    })
  }

}
