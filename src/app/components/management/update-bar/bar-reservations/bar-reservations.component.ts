import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-reservations',
  templateUrl: './bar-reservations.component.html',
  styleUrls: ['./bar-reservations.component.css']
})
export class BarReservationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  reservations = [
    {
      id: '1',
      owner: 'Jafet Mora Ugalde',
      details: 'Table #2 for 5 people',
      date: '5/3/2022 at 18:00 PM'
    },
    {
      id: '1',
      owner: 'Jafet Mora Ugalde',
      details: 'Table #2 for 5 people',
      date: '5/3/2022 at 18:00 PM'
    },
    {
      id: '1',
      owner: 'Jafet Mora Ugalde',
      details: 'Table #2 for 5 people',
      date: '5/3/2022 at 18:00 PM'
    },
    {
      id: '1',
      owner: 'Jafet Mora Ugalde',
      details: 'Table #2 for 5 people',
      date: '5/3/2022 at 18:00 PM'
    },
    {
      id: '1',
      owner: 'Jafet Mora Ugalde',
      details: 'Table #2 for 5 people',
      date: '5/3/2022 at 18:00 PM'
    },
    {
      id: '1',
      owner: 'Jafet Mora Ugalde',
      details: 'Table #2 for 5 people',
      date: '5/3/2022 at 18:00 PM'
    },
  ]

}
