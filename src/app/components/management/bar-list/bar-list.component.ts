import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-list',
  templateUrl: './bar-list.component.html',
  styleUrls: ['./bar-list.component.css']
})
export class BarListComponent implements OnInit {
  bares = [
    {
      name: 'OPEN MIND',
      address: 'Sample text for restaurant direction'
    },
    {
      name: 'OPEN MIND',
      address: 'Sample text for restaurant direction'
    },
    {
      name: 'OPEN MIND',
      address: 'Sample text for restaurant direction'
    },
    {
      name: 'OPEN MIND',
      address: 'Sample text for restaurant direction'
    },
    {
      name: 'OPEN MIND',
      address: 'Sample text for restaurant direction'
    },
    {
      name: 'OPEN MIND',
      address: 'Sample text for restaurant direction'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
