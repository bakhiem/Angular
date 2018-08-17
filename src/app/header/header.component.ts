import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  coverImage = "https://i2.wp.com/notesnepal.com/wp-content/uploads/2015/07/old-buddha-statue-facebook-cover.jpg";
  constructor() { }

  ngOnInit() {
  }

}
