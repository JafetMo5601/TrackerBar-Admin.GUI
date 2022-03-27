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
  user_profile: UserProfile | null = null

  updateForm = new FormGroup({
    id: new FormControl('', {
      validators: Validators.required
    }),
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
    private token: TokenStorageService,
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

    this.user_profile = this.user_info.getUSerInfo(this.user_id);

    if (this.user_profile != null) {
      this.updateForm.controls['id'].setValue(this.user_profile.id);
      this.updateForm.controls['name'].setValue(this.user_profile.name);
      this.updateForm.controls['last'].setValue(this.user_profile.last);
      this.updateForm.controls['email'].setValue(this.user_profile.email);
      this.updateForm.controls['username'].setValue(this.user_profile.username);
      this.updateForm.controls['password'].setValue(this.user_profile.password);
      this.updateForm.controls['birthdate'].setValue(this.user_profile.birthday);
    } else {
      this.openCustomPopUp('There was an error retrieving the user information, please login again.');
    }
  }

  public openCustomPopUp(message: string) {
    this.customPopUpService.confirm(
      'User Profile', 
      message,
      ''
      );
  }

  onSubmit() {
  //   var date: Date = this.signUpForm.controls['birthdate'].value;
  //   var formatedDate = date.toISOString();
  //   this.authService.register(
  //     this.signUpForm.controls['id'].value,
  //     this.signUpForm.controls['name'].value,
  //     this.signUpForm.controls['last'].value,
  //     this.signUpForm.controls['username'].value,
  //     this.signUpForm.controls['email'].value,
  //     this.signUpForm.controls['password'].value,
  //     formatedDate
  //   ).subscribe(
  //     data => {
  //       console.log(data);
  //       this.isSuccessful = true;
  //       this.isSignUpFailed = false;
  //       this.openCustomPopUp(data.message);
  //     }, err => {
  //       console.log(err);
  //       this.errorMessage = err.error.message;
  //       this.isSignUpFailed = true;
  //     }
  //   );
  }
}
