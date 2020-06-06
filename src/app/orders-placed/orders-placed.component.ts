import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-orders-placed',
  templateUrl: './orders-placed.component.html',
  styleUrls: ['./orders-placed.component.css']
})
export class OrdersPlacedComponent implements OnInit {

  orders;
  user;

  constructor(private orderservice: OrderService) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.getUserOrders();
  }

  getUserOrders(){
    this.orderservice.getOrderByUser(this.user._id).subscribe(data => {
      console.log(data);
      this.orders = data;
    })
  }

}
