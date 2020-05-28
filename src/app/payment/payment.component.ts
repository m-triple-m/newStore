import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  
  // reserveorder;
  // price;
  // address;
  // city;
  // state;
  // pin;
  // orderno=0;
  // locality;

  user;
  location;
  reserveform;  
  ordernum;
  areareq;

  constructor(private formbuilder:FormBuilder,private router:Router, private orderservie: OrderService) { }

  ngOnInit() {
    
    this.user=JSON.parse(sessionStorage.getItem('user'));
    this.location=JSON.parse(sessionStorage.getItem('location'))
    this.areareq=JSON.parse(sessionStorage.getItem('area'))
    this.orderservie.getOrderNumber().subscribe((num: number) => {
      console.log('Order Number : '+num+1);
      this.ordernum = num+1;
      this.initform(this.user, this.location);
    });
    
  }
  
  initform(user, location){
    this.reserveform=this.formbuilder.group({
      user : user._id,
      location : location._id,
      first :['',Validators.required],
      last:['',Validators.required],
      phone:['',Validators.required],
      email:['',Validators.required],
      date:['',Validators.required],
      orderdate:new Date(),
      reservation:this.ordernum,
    })
  }
  reserveSubmit(formdata){
    this.orderservie.addOrder(formdata).subscribe((res)=>{
      console.log(res);
      sessionStorage.setItem('reserveorder',JSON.stringify(formdata))
      this.router.navigate(['/results']);
    })
  }
}