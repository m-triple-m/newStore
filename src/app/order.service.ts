import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url = "http://localhost:3000/order"
  constructor(private http: HttpClient) { }

  addOrder(formdata){
    return this.http.post(this.url+'/add', formdata);
  }

  getAllOrders(){
    return this.http.get(this.url+'/getall');
  }

  getOrderNumber(){
    return this.http.get(this.url+'/getnum');
  }

  getOrderByUser(id){
    return this.http.get(this.url+'/getbyuser/'+id);
  }

  orderPackage(formdata){
    return this.http.post('http://localhost:3000/package/add', formdata);
  }

  getOrderedPackagesByUser(id){
    return this.http.get('http://localhost:3000/package/getbyuser/'+id);
  }
}
