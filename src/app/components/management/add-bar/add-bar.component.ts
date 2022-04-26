import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomPopUpService } from 'src/app/shared/custom-pop-up/custom-pop-up.service';
import { AdminBaresService } from 'src/app/shared/services/admin-bares.service';
import { PersonalInformationService } from 'src/app/shared/services/personal-information.service';


@Component({
  selector: 'app-add-bar',
  templateUrl: './add-bar.component.html',
  styleUrls: ['./add-bar.component.css']
})
export class AddBarComponent implements OnInit {

  addBar = new FormGroup({
    name: new FormControl('', {
      validators: Validators.required
    }),
    table_qty: new FormControl(0, {
      validators: Validators.required
    }),
    employee_qty: new FormControl(0, {
      validators: Validators.required
    }),
    people_qty: new FormControl(0, {
      validators: Validators.required
    }),
    phone_number: new FormControl(''),
    address: new FormControl('', {
      validators: Validators.required
    })
  });

  constructor(
    private adminBaresService: AdminBaresService,
    private userInfoService: PersonalInformationService,
    private customPopUpService: CustomPopUpService
  ) { }

  ngOnInit(): void {
  }

  openCustomPopUp(message: string) {
    this.customPopUpService.confirm(
      'Bares administration', 
      message,
      'home'
      );
  }

  onSubmit() {
    var userId = this.userInfoService.getId();

    if (userId != null) {
      this.adminBaresService.addBar(
        this.addBar.controls['name'].value,
        this.addBar.controls['people_qty'].value,
        this.addBar.controls['table_qty'].value,
        this.addBar.controls['employee_qty'].value,
        this.addBar.controls['phone_number'].value,
        this.addBar.controls['address'].value,
        userId
      ).subscribe(
        data => {
          console.log(data);
          this.openCustomPopUp("Check the information provided and try again!");
        },
        err => {
          console.log(err)
          this.openCustomPopUp("Restaurant created successfully!");
        });
    } else {
       console.log("Error adding the bard");
    }
  }

}
