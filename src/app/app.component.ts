import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  fields: string[] = ["field1", "field2", "field3"];

  constructor() {
  }

  ngOnInit() {
  }

}
