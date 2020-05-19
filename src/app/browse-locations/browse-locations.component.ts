import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-browse-locations',
  templateUrl: './browse-locations.component.html',
  styleUrls: ['./browse-locations.component.css']
})
export class BrowseLocationsComponent implements OnInit {

  @Input('locations') locations;
  constructor() { }

  ngOnInit(): void {
  }

}
