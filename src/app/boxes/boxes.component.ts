import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {
smallboxcount=0;
mediumboxcount=0;
mediumboxxcount=0;
largeboxcount=0;
wardboxcount=0;
  constructor() { }

  ngOnInit(): void {
  }
  smallboxneg(){
    if(this.smallboxcount>0){
      this.smallboxcount--;
    }
    
  }
  smallboxpos(){
    this.smallboxcount++;
  }
  mediumboxneg(){
    if(this.mediumboxcount>0){
      this.mediumboxcount--;
    }
  }
  mediumboxpos(){
    this.mediumboxcount++;
  }
  mediumboxxneg(){
    if(this.mediumboxxcount>0){
      this.mediumboxxcount--;
    }
  }
  mediumboxxpos(){
    this.mediumboxxcount++;
  }
  largeboxneg(){
    if(this.largeboxcount>0){
      this.largeboxcount--;
    }
  }
  largeboxpos(){
    this.largeboxcount++;
  }
  wardboxneg(){
    if(this.wardboxcount>0){
      this.wardboxcount--;
    }
  }
  wardboxpos(){
    this.wardboxcount++;
  }
  orderbox(){
    
  }

}
