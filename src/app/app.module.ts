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
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './components/home/content/content.component';
import { SideBarComponent } from './components/home/side-bar/side-bar.component';
import { TopMenuComponent } from './components/home/top-menu/top-menu.component';
import { ProfileComponent } from './components/home/content/profile/profile.component';

@NgModule({
  declarations: [
    CustomPopUpComponent,
    NotFoundComponent,
    HomeComponent,
    AppComponent,
    ContentComponent,
    SideBarComponent,
    TopMenuComponent,
    ProfileComponent,
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
