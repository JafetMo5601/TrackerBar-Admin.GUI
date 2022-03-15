import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  tryingLoggin: boolean = true;
  show_register: boolean = false;
  signUpButton: any;
  signInButton: any;
  container: any;

  constructor() { }

  ngOnInit(): void {
    this.signUpButton = document.getElementById("signUp");
    this.signInButton = document.getElementById("signIn");
    this.container = document.getElementById("container");

    this.signUpButton.addEventListener("click", () => {
      this.container.classList.add("right-panel-active");
    });

    this.signInButton.addEventListener("click", () => {
      this.container.classList.remove("right-panel-active");
    });
  }

}
