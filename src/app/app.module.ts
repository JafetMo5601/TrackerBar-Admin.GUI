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

@NgModule({
  declarations: [
    CustomPopUpComponent,
    NotFoundComponent,
    HomeComponent,
    AppComponent,
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
