import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  reserveorder;
  constructor() { }

  ngOnInit() {
    Swal.fire({icon : 'success', title : 'Thank You for your Reservation', text : 'You will recieve an email shortly with your reservation details.'})
    this.reserveorder=JSON.parse(sessionStorage.getItem('reserveorder'))
    console.log(this.reserveorder)
  }

}
