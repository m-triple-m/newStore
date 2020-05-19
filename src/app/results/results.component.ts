import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  reserveorder;
  constructor() { }

  ngOnInit() {
    this.reserveorder=JSON.parse(sessionStorage.getItem('reserveorder'))
    console.log(this.reserveorder)
  }

}
