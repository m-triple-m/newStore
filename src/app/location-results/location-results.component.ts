import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { Options } from '../models/usage';

@Component({
  selector: 'app-location-results',
  templateUrl: './location-results.component.html',
  styleUrls: ['./location-results.component.css']
})
export class LocationResultsComponent implements OnInit {
  useroptions;
  locations;
  space;
  spaceOptions;
  areaReq;
  constructor(private activatedroute:ActivatedRoute,private formbuilder : FormBuilder,public userservice:UserService, public router: Router) { }

  ngOnInit() {
    this.useroptions=Options.options;
    this.areaReq = sessionStorage.getItem('areareq');
    this.userservice.getallLocation().subscribe(data => {
      console.log(data);
      this.locations=data;
      
    })

  }
  bookLocation(location){
    sessionStorage.setItem('location', JSON.stringify(location));
    sessionStorage.setItem('area', JSON.stringify(this.areaReq));
    this.router.navigate(['/payment'])
  }
  filterLocationBySpaceReq(){
    

    // this.locations =  this.locations.filter((loc) => {
    //   // console.log(loc.area+'  '+this.space);
    //   return loc.area >= this.space;
    // })
    // sessionStorage.getItem('spacesel',this.spaceOptions)
    
    console.log(this.spaceOptions)
    console.log(this.space);

    // this.locations = this.locations.map(loc => {
    //   loc.price += loc.price*business_inc/100
    //   loc.price += loc.price*visit_inc/100
    //   console.log(loc.price);
    //   return loc;
    // })
  }

}
