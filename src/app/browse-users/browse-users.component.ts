import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-browse-users',
  templateUrl: './browse-users.component.html',
  styleUrls: ['./browse-users.component.css']
})
export class BrowseUsersComponent implements OnInit {

  @Input('users') users;
  constructor() { }

  ngOnInit(): void {
  }

}
