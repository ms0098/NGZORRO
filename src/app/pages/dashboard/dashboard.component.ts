import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  table_data: any = [
    {
      email: 'abc@gmail.com',
      verified: false
    },
    {
      email: 'sjkdas@gmail.com',
      verified: false
    },
    {
      email: 'lajskl@gmail.com',
      verified: false
    },
    {
      email: 'kkh@gmail.com',
      verified: false
    },
    {
      email: 'agl@gmail.com',
      verified: false
    },
    {
      email: 'xyz@gmail.com',
      verified: false
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  print() {
    window.print();
  }

}
