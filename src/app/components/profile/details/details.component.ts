import { Component, Input, OnInit } from '@angular/core';
import { PersonalInformationService } from 'src/app/shared/services/personal-information.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  profile_image_path = ''
  user_full_name = ''

  @Input()
  show_logout_button = true

  constructor(
    private user_info: PersonalInformationService,
    private token: TokenStorageService,
  ) {
  }

  ngOnInit(): void {
    this.profile_image_path = "/assets/icons/profile-icon.png";
    this.user_full_name = this.user_info.getFullName();
  }

  logout() {
    this.token.signOut();
    window.location.reload()
  }

}
