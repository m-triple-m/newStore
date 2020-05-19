import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registered-locations',
  templateUrl: './registered-locations.component.html',
  styleUrls: ['./registered-locations.component.css']
})
export class RegisteredLocationsComponent implements OnInit {
  locations;
  constructor(private userservice:UserService) { }

  ngOnInit() {
    this.userservice.getallLocation().subscribe(data =>{
      this.locations=data;
    })
  }

}
