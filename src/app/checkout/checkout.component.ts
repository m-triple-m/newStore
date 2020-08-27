import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { OrderService } from '../order.service';
import Swal from 'sweetalert2';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  @ViewChild('cardInfo', {static: false}) cardInfo: ElementRef;
 
  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;
  amount;
  user;
  order;
  addressform;
  showaddress= false;
  showselectaddress= true;
  selectedaddress;
  
 
  constructor(private orderservice : OrderService, private router: Router,
    private cd: ChangeDetectorRef, private http: HttpClient , cartservice : CartService , private formbuilder: FormBuilder ,  private userservice: UserService) { }
 
  ngOnInit() {
    console.log(`to pay ${this.amount}`)
    this.user = JSON.parse(sessionStorage.getItem('user')); 
    // this.loadStripe();
    this.order= JSON.parse(sessionStorage.getItem('package')); 
    console.log(this.order);
    this.initform();
  }
 
  ngAfterViewInit() {
 
    const style = {
      base: {
        lineHeight: '24px',
        fontFamily: 'monospace',
        fontSmoothing: 'antialiased',
        fontSize: '19px',
        '::placeholder': {
          color: 'purple'
        }
      }
    };
 
    this.card = elements.create('card', {style});
    this.card.mount(this.cardInfo.nativeElement);
 
    this.card.addEventListener('change', this.cardHandler);
  }
 
  ngOnDestroy() {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }
 
  onChange({ error }) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }
  
  completePayment(secret, obj){
    const that = obj
    stripe.confirmCardPayment(secret, {
      payment_method: {
        card: this.card,
        billing_details: {
          name: 'Leon S Kennedy'
        }
      }
    }).then(function(result) {
      if (result.error) {
        
        // Show error to your customer (e.g., insufficient funds)
        console.log(result.error.message);
      } else {
        // The payment has been processed!
        if (result.paymentIntent.status === 'succeeded') {
          console.log('success');
          that.addOrder();
          // console.log(card);
        }
      }
    });
  }
 
  addOrder(){
    this.order.address=this.selectedaddress
    this.orderservice.orderPackage(this.order).subscribe((message)=>
          {
            console.log(message); 
            
            this.router.navigate(['/userdash'])
            Swal.fire({
              icon: 'success',
              title: 'Order Placed',
              text: 'You will be informed once the order is confirmed from the host end!'
            })
          })
  }
 
  getIntent(){
    this.http.post('http://localhost:3000/create-payment-intent', {amount : Math.round(this.order.amount)}).subscribe(data => {
      console.log(data);
     this.completePayment(data['client_secret'], this);
      console.log(this.card);
    });
  }

  initform(){
    this.addressform = this.formbuilder.group({
      house : '',
      area :'',
      city :'',
      landmark : '',
      state : '',
      country :'',
    })
  }

  returnControls(){
    return this.addressform.controls;
  }

  userSubmit(formdata){
    console.log(formdata);   
     this.showaddress=false; 
     this.user.address.push(formdata);
    this.userservice.updateUser(this.user._id,{address : this.user.address}).subscribe(data =>{
     console.log(data);
    })  
  }
  toggleaddaddress(){
    this.showaddress=true;
  }
  selectaddress(index){
    this.showselectaddress=false;
    this.selectedaddress=this.user.address[index];
    
  }

}
