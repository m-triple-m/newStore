import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Options } from '../models/usage';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  isLinear = false;
  usage1;
  usage3;
  usage2;
  usage4;
  space;
  areareq = 0;
  useroptions;
  location;
  selectedLocation;
  locations;

  spaceOptions = [15, 25, 50, 100, 300, 500];

  next = faArrowRight;
  prev = faArrowLeft;

  constructor(private activatedroute:ActivatedRoute,private formbuilder : FormBuilder,public userservice:UserService, public router: Router) { }

  ngOnInit() {
    this.useroptions=Options.options;
    this.userservice.getallLocation().subscribe( data => {
      console.log(data);
      this.locations = data;
      
    })
  }

  setUsageIncrement(){
    console.log(this.getStep4()[this.usage4].increment);
  }

  getDiscounts(){
    console.log('dis');
    this.setUsageIncrement();
  }

  getStep1(){
    return this.useroptions;
  }

  getStep2(){
    return this.useroptions[this.usage1].options;
  }

  getStep3(){
    return this.useroptions[this.usage1].options[this.usage2].options;
  }

  getStep4(){
    return this.useroptions[this.usage1].options[this.usage2].options[this.usage3].options;
  }

  setUsage1(use){
    this.usage1 = use;
    console.log(this.usage1);
  }

  setUsage2(use){
    this.usage2=use;
    console.log(this.usage2);
  }
  
  setUsage3(use){
    this.usage3=use;
    console.log(this.usage3);
  }
  setUsage4(use){
    this.usage4=use;
    console.log(this.usage4);
  }

  filterLocationBySpaceReq(){
    let business_inc = this.getStep1()[this.usage1].increment;
    // console.log('busiess '+business_inc);
    let visit_inc = this.getStep4()[this.usage4].increment;
    // console.log('visit '+visit_inc);

    this.locations =  this.locations.filter((loc) => {
      // console.log(loc.area+'  '+this.space);
      return loc.area >= this.space;
    })

    this.spaceOptions = this.spaceOptions.filter(opt => {
      return opt > this.space;
    })
    console.log(this.spaceOptions)
    console.log(this.space);

    this.locations = this.locations.map(loc => {
      loc.price += loc.price*business_inc/100
      loc.price += loc.price*visit_inc/100
      console.log(loc.price);
      return loc;
    })
  }

  setSpace(space){
    if(space>0){
      this.space = space;
      
    }
    console.log(space);
  }

  setLocation(loc){

    this.location = loc;
    

  }

  setLocationDetails(){
    if(this.usage1 == 1){
      this.location.price += this.location.price*(this.useroptions[1].increment/100);
    }

    // if(this.usage3 == )
    // if(this.usage2 == )
    console.log(this.location);
  }

  setDetails(location){
    this.location=this.locations[location]
    sessionStorage.setItem('location',JSON.stringify(location));
    sessionStorage.setItem('price',JSON.stringify(this.areareq));
    this.router.navigate(['/payment'])
  }

  bookLocation(location){
    sessionStorage.setItem('location', JSON.stringify(location));
    sessionStorage.setItem('area', JSON.stringify(this.space));
    this.router.navigate(['/payment'])
  }

}