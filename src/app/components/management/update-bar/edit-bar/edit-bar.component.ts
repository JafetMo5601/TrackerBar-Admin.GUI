import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-bar',
  templateUrl: './edit-bar.component.html',
  styleUrls: ['./edit-bar.component.css']
})
export class EditBarComponent implements OnInit {

  editBar = new FormGroup({
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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {}

}
