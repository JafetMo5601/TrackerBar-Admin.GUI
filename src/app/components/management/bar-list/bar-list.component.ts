import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-list',
  templateUrl: './bar-list.component.html',
  styleUrls: ['./bar-list.component.css']
})
export class BarListComponent implements OnInit {
  bares = [
    {
      id: '1',
      name: 'OPEN MIND',
      address: 'Sample text for restaurant direction'
    },
    {
      id: '2',
      name: 'OPEN MIND',
      address: 'Sample text for restaurant direction'
    },
    {
      id: '3',
      name: 'OPEN MIND',
      address: 'Sample text for restaurant direction'
    },
    {
      id: '4',
      name: 'OPEN MIND',
      address: 'Sample text for restaurant direction'
    },
    {
      id: '5',
      name: 'OPEN MIND',
      address: 'Sample text for restaurant direction'
    },
    {
      id: '6',
      name: 'OPEN MIND',
      address: 'Sample text for restaurant direction'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
