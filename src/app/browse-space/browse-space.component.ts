import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-browse-space',
  templateUrl: './browse-space.component.html',
  styleUrls: ['./browse-space.component.css']
})
export class BrowseSpaceComponent implements OnInit {

  @Input('location') loc;
  location;
  constructor(private active: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.loc){
      this.location = this.loc;
    }else{
      this.location = this.active.snapshot.paramMap.get('loc');
    }
  }

}
