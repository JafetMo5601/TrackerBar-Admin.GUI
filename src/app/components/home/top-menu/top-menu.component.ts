import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor(
    private token: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  logout() {
    this.token.signOut();
    this.router.navigate(['auth/login']);
  }

}
