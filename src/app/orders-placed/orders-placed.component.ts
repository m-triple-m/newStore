import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-orders-placed',
  templateUrl: './orders-placed.component.html',
  styleUrls: ['./orders-placed.component.css']
})
export class OrdersPlacedComponent implements OnInit {

  orders;
  constructor(private userservice:UserService) { }

  ngOnInit() {
    this.userservice.getorder().subscribe(data=>{
      this.orders=data;
    })
  }

}
