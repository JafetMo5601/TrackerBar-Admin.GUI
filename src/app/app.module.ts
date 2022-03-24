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
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialsModule,
    BrowserModule,
    CommonModule,
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
