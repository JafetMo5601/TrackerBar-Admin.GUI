import { Component, OnInit } from '@angular/core';
import { Bares } from 'src/app/shared/interfaces/bares';
import { AdminBaresService } from 'src/app/shared/services/admin-bares.service';
import { BarStatisticsService } from 'src/app/shared/services/bar-statistics.service';
import { PersonalInformationService } from 'src/app/shared/services/personal-information.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  user_id: string | null = '';
  total_tables: number = 0;
  tables_available: number = 0;
  total_people: number = 0;
  spaces_available: number = 0;
  restaurant_id: number = 10;
  bares: Array<Bares> = [
    {
      id: 7,
      name: 'test'
    },
    {
      id: 2,
      name: 'test'
    },
    {
      id: 10,
      name: 'test'
    },
  ]
  constructor(
    private bar_stats: BarStatisticsService,
    private adminBarService: AdminBaresService,
    private userInfo: PersonalInformationService
    ) { }

  ngOnInit(): void {
    this.retrieveRestaurantValues();
    this.user_id = this.userInfo.getId();

    if (this.user_id != null) {
      this.adminBarService.getRestaurantsByOwner(this.user_id).subscribe(
        data => {
          this.bares = data
        },
        err => {}
      );
    }
  }

  retrieveRestaurantValues() {
    this.bar_stats.getTotalTables(this.restaurant_id).subscribe (
      data => {this.total_tables = data},
      err => {this.total_tables = 0});

    this.bar_stats.getTotalTablesAvailable(this.restaurant_id).subscribe (
      data => {this.tables_available = data},
      err => {this.tables_available = 0});
      
    this.bar_stats.getTotalPeople(this.restaurant_id).subscribe (
      data => {this.total_people = data},
      err => {this.total_people = 0});

    this.bar_stats.getTotalSpacesAvailable(this.restaurant_id).subscribe (
      data => {this.spaces_available = data},
      err => {this.spaces_available = 0});
  }

}
