import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-package-manager',
  templateUrl: './package-manager.component.html',
  styleUrls: ['./package-manager.component.css']
})
export class PackageManagerComponent implements OnInit {

  orders;
  user;

  constructor(private orderservice: OrderService) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.getUserOrders();
  }

  getUserOrders(){
    this.orderservice.getOrderedPackagesByUser(this.user._id).subscribe(data => {
      console.log(data);
      this.orders = data;
    })
  }

}
