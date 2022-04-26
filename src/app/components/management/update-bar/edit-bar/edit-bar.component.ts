import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomPopUpService } from 'src/app/shared/custom-pop-up/custom-pop-up.service';
import { AdminBaresService } from 'src/app/shared/services/admin-bares.service';
import { PersonalInformationService } from 'src/app/shared/services/personal-information.service';

@Component({
	selector: 'app-edit-bar',
	templateUrl: './edit-bar.component.html',
	styleUrls: ['./edit-bar.component.css']
})
export class EditBarComponent implements OnInit {
	bar_id = '';
	user_id: any = '';

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

	constructor(
		private adminBarService: AdminBaresService,
		private personalInfoService: PersonalInformationService,
		private customPopUpService: CustomPopUpService,
		private _ActivatedRoute: ActivatedRoute,
	) { }

	public openCustomPopUp(title: string, message: string) {
		this.customPopUpService.confirm(
			title,
			message,
			'admin-restaurants'
		);
	  }

	ngOnInit(): void {
		this._ActivatedRoute.paramMap.subscribe(
			params => {
				this.bar_id = params.get('restaurant_id')!;
			});
		
		this.user_id = this.personalInfoService.getId();

		if (this.user_id != null) {
			this.adminBarService.getBarById(this.user_id, +this.bar_id).subscribe(
			data => {
				console.log(data);

				this.editBar.controls['name'].setValue(data.name);
				this.editBar.controls['table_qty'].setValue(data.tablesQty);
				this.editBar.controls['employee_qty'].setValue(data.employeeQty);
				this.editBar.controls['people_qty'].setValue(data.peopleQty);
				this.editBar.controls['phone_number'].setValue(data.phone);
				this.editBar.controls['address'].setValue(data.address);
				console.log(data);
				console.log(typeof data);
			},
			err => {
				console.log("Error");
				this.openCustomPopUp('Bar administration error!', 'There was a problem retrieving the bar information!');
			}
			);
		}
	}

	updateRestaurant() {
		this.adminBarService.updateBar(
			+this.bar_id,
			this.editBar.controls['name'].value,
			this.editBar.controls['people_qty'].value,
			this.editBar.controls['table_qty'].value,
			this.editBar.controls['employee_qty'].value,
			this.editBar.controls['phone_number'].value,
			this.user_id,
			this.editBar.controls['address'].value,
		).subscribe(
			data => {
				this.openCustomPopUp('Bar administration', 'The restaurant was updated successfully!');
				console.log(data);
			},
			err => {
				console.log("err");
				console.log(err);
			}
		);
	}

	deleteRestaurant() {
		this.adminBarService.deleteBar(+this.bar_id, this.user_id).subscribe(
			data => {
				console.log(data);
			},
			err => {
				console.log(err);
				this.openCustomPopUp('Bar administration', 'The restaurant was deleted successfully!');
			}
		);
	}

}
