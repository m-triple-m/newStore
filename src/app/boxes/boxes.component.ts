import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {

  smallBox = {name : 'Small Box', count: 0, price: 30, image : 'small.jpg'};
  mediumBox = {name : 'Medium Box', count: 0, price: 50, image : 'medium.jpg'};
  mediumBox2 = {name : 'Medium Box (Extra strong)', count: 0, price: 75, image : 'mediumx.jpg'};
  largeBox = {name : 'Large Box', count: 0, price: 100, image : 'large.jpg'};
  wardrobeBox = {name : 'Wardrobe Box', count: 0, price: 750, image : 'wbox.jpg'};

  constructor(private cartservice: CartService) { }

  ngOnInit(): void {
  }
  smallboxneg(){
    if(this.smallBox.count>0){
      this.smallBox.count--;
    }
    
  }
  smallboxpos(){
    this.smallBox.count++;
  }
  mediumboxneg(){
    if(this.mediumBox.count>0){
      this.mediumBox.count--;
    }
  }
  mediumboxpos(){
    this.mediumBox.count++;
  }
  mediumboxxneg(){
    if(this.mediumBox2.count>0){
      this.mediumBox2.count--;
    }
  }
  mediumboxxpos(){
    this.mediumBox2.count++;
  }
  largeboxneg(){
    if(this.largeBox.count>0){
      this.largeBox.count--;
    }
  }
  largeboxpos(){
    this.largeBox.count++;
  }
  wardboxneg(){
    if(this.wardrobeBox.count>0){
      this.wardrobeBox.count--;
    }
  }
  wardboxpos(){
    this.wardrobeBox.count++;
  }
  orderbox(){
    
  }

  addToCart(){
    this.cartservice.additem(this.smallBox);
    this.cartservice.additem(this.mediumBox);
    this.cartservice.additem(this.largeBox);
    this.cartservice.additem(this.mediumBox2);
    this.cartservice.additem(this.wardrobeBox);
  }

}
