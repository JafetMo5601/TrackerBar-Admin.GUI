import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservations } from 'src/app/shared/interfaces/reservations';
import { AdminBaresService } from 'src/app/shared/services/admin-bares.service';

@Component({
  selector: 'app-bar-reservations',
  templateUrl: './bar-reservations.component.html',
  styleUrls: ['./bar-reservations.component.css']
})
export class BarReservationsComponent implements OnInit {
  bar_id = '';
  reservations: Array<Reservations> = [
    {
      id: '1',
      owner: 'Jafet Mora Ugalde',
      details: 'Table #2 for 5 people',
      date: '5/3/2022 at 18:00 PM'
    },
  ]

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private adminBarService: AdminBaresService,
  ) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(
			params => {
				this.bar_id = params.get('restaurant_id')!;
			});


      this.adminBarService.getReservationsByBarId(+this.bar_id).subscribe(
        data => {
          data.forEach(function (value) {
            let newDate = new Date(value.date);
            value.date = newDate
          });
          console.log(data);
          this.reservations = data;
        },
        err => {}
      );
  }
}
