import { Component, OnInit } from '@angular/core';
import { AdminBaresService } from 'src/app/shared/services/admin-bares.service';
import { PersonalInformationService } from 'src/app/shared/services/personal-information.service';

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
    }
  ]

  constructor(
    private barManagementService: AdminBaresService,
    private user_info: PersonalInformationService,
  ) { }

  ngOnInit(): void {
    var userId = this.user_info.getId();

    if (userId != null) {
      this.barManagementService.getYourBares(userId).subscribe(
       data => {
         this.bares = data;
       },
       err => {
        console.log(err);
       } 
      );
    }
  }

}
