import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {
  regusers;
  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.userservice.getallusers().subscribe(data => {
      this.regusers=data;
    })
  }

}
