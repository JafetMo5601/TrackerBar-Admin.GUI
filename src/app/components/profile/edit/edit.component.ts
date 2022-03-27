import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  ) {}

  ngOnInit(): void {
    this.profile_image_path = "/assets/icons/profile-icon.png";
    this.user_full_name = this.user_info.getFullName();
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
