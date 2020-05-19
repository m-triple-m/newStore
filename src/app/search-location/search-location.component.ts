import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.css']
})
export class SearchLocationComponent implements OnInit {

  locations;
  location;
  form;

  loc;

  constructor(private userService: UserService,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.userService.getallLocation().subscribe( data => {
      console.log(data);
      this.locations = data;
    })

    console.log(this.locations);
  }

  // setLocation(index){
  //     this.loc = this.locations[index];
  //     this.getLocation.emit(this.loc);
  // }

  searchLocation(location){
    this.userService.getlocationByCity(location).subscribe(data => {
      console.log(data);
      this.locations = data;
    })
  }
  
  

}
