import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomPopUpComponent } from './shared/custom-pop-up/custom-pop-up.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialsModule } from './shared/materials/materials.module';
import { CommonModule } from '@angular/common';
import { authInterceptorProviders } from './shared/services/auth.interceptor';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { ManagementComponent } from './components/management/management.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SideBarComponent } from './components/home/side-bar/side-bar.component';
import { ContentComponent } from './components/home/content/content.component';
import { AddBarComponent } from './components/management/add-bar/add-bar.component';
import { BarListComponent } from './components/management/bar-list/bar-list.component';
import { DetailsComponent } from './components/profile/details/details.component';
import { EditComponent } from './components/profile/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateBarComponent } from './components/management/update-bar/update-bar.component';
import { BarReservationsComponent } from './components/management/update-bar/bar-reservations/bar-reservations.component';
import { EditBarComponent } from './components/management/update-bar/edit-bar/edit-bar.component';

@NgModule({
  declarations: [
    CustomPopUpComponent,
    NotFoundComponent,
    ContentComponent,
    SideBarComponent,
    TopMenuComponent,
    ProfileComponent,
    ManagementComponent,
    HomeComponent,
    AppComponent,
    AddBarComponent,
    BarListComponent,
    DetailsComponent,
    EditComponent,
    UpdateBarComponent,
    BarReservationsComponent,
    EditBarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    NgbModule,
  ],
  providers: [
    authInterceptorProviders
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
