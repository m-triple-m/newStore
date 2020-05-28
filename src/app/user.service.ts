import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedin = false;
  url="http://localhost:3000";
  
  constructor(private httpClient:HttpClient) { 
    if(sessionStorage.getItem('user')){
      this.loggedin = true;
    }
  }

  addUser(formdata){
    return this.httpClient.post(this.url+'/user/add',formdata);
    
  }
  getByUsername(username){
    return this.httpClient.get(this.url+`/user/getbyusername/${username}`);
  }
  addLocation(formdata){
    return this.httpClient.post(this.url+'/location/add',formdata);
  }
  getallLocation(){
    return this.httpClient.get(this.url+'/location/all');
  }

  getByEmail(email){
    return this.httpClient.get(this.url+`/user/getbyemail/${email}`)
  }

  getlocationByCity(city){
    return this.httpClient.get(this.url+`/location/getByCity/${city}`);
  }
  getallusers(){
    return this.httpClient.get(this.url+'/user/getall');
  }
  addOrder(formdata){
    return this.httpClient.post(this.url+'/order/add',formdata);
  }
  getorder(){
    return this.httpClient.get(this.url+'/order/getall');
  }
  

  }

  

