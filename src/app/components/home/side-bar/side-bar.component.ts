import { Component, OnInit } from '@angular/core';
import { BarStatisticsService } from 'src/app/shared/services/bar-statistics.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  total_tables: number = 0;
  tables_available: number = 0;
  total_people: number = 0;
  spaces_available: number = 0;

  constructor(private bar_stats: BarStatisticsService) { }

  ngOnInit(): void {
    this.bar_stats.getTotalTables(1).subscribe (
      data => {this.total_tables = data},
      err => {console.log(err)});

    this.bar_stats.getTotalTablesAvailable(1).subscribe (
      data => {this.tables_available = data},
      err => {console.log(err)});
      
    this.bar_stats.getTotalPeople(1).subscribe (
      data => {this.total_people = data},
      err => {console.log(err)});

    this.bar_stats.getTotalSpacesAvailable(1).subscribe (
      data => {this.spaces_available = data},
      err => {console.log(err)})
  }

}
