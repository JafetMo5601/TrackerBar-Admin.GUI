import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomPopUpService } from 'src/app/shared/custom-pop-up/custom-pop-up.service';
import { UserProfile } from 'src/app/shared/interfaces/user-profile';
import { PersonalInformationService } from 'src/app/shared/services/personal-information.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  profile_image_path = ''
  user_full_name = ''
  show_logout_button = false
  user_id = ''

  updateForm = new FormGroup({
    id: new FormControl({ value: '', disabled: true}),
    name: new FormControl('', {
      validators: Validators.required
    }),
    last: new FormControl('', {
      validators: Validators.required
    }),
    username: new FormControl('', {
      validators: Validators.required
    }),
    email: new FormControl('', {
      validators: [
        Validators.required,
        Validators.email
      ]
    }),
    password: new FormControl('', {
      validators: Validators.required
    }),
    birthdate: new FormControl('', {
      validators: Validators.required
    })
  });

  constructor(
    private user_info: PersonalInformationService,
    private customPopUpService: CustomPopUpService,
    private _ActivatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.profile_image_path = "/assets/icons/profile-icon.png";
    this.user_full_name = this.user_info.getFullName();

    this._ActivatedRoute.paramMap.subscribe(
      params => {
        this.user_id = params.get('user_id')!;
      });

    this.user_info.getUSerInfo(this.user_id).subscribe(
      data => {
        if (data != null) {
          this.updateForm.controls['id'].setValue(data.id);
          this.updateForm.controls['name'].setValue(data.name);
          this.updateForm.controls['last'].setValue(data.last);
          this.updateForm.controls['email'].setValue(data.email);
          this.updateForm.controls['username'].setValue(data.userName);
          this.updateForm.controls['password'].setValue(data.password);
          this.updateForm.controls['birthdate'].setValue(data.birthDate);
        }
      },
      err => {
        console.log(err)
        this.openCustomPopUp('There was an error retrieving the user information, please login again.', '');
      }
    );
  }

  public openCustomPopUp(message: string, route: string) {
    this.customPopUpService.confirm(
      'User Profile', 
      message,
      route,
      );
  }

  onSubmit() {
    var date: Date = new Date(this.updateForm.controls['birthdate'].value);
    var formatedDate: string = date.toISOString();
    this.user_info.updateProfile(
      this.updateForm.controls['id'].value,
      this.updateForm.controls['name'].value,
      this.updateForm.controls['last'].value,
      this.updateForm.controls['username'].value,
      this.updateForm.controls['email'].value,
      this.updateForm.controls['password'].value,
      formatedDate
    ).subscribe(
      data => {
        console.log(data);
        this.openCustomPopUp("There was a problem updating the user, try later.", 'profile');
      }, err => {
        console.log(err);
        this.openCustomPopUp("User updated successfully!", 'profile');

        this.user_info.savePersonalInfo(
          this.updateForm.controls['id'].value,
          this.updateForm.controls['username'].value,
          this.updateForm.controls['email'].value,
          this.updateForm.controls['name'].value,
          this.updateForm.controls['last'].value,
        )
      }
    );
  }
}
