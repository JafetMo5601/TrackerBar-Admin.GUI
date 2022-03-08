import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialsModule } from 'src/app/shared/materials/materials.module';
import { RouterModule } from '@angular/router';
import { authInterceptorProviders } from 'src/app/shared/services/auth.interceptor';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    AuthComponent,
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    MaterialsModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { 
        path: '', 
        component: AuthComponent,
        children: [
          { path: 'login', component: LoginComponent },
          { path: 'register', component: RegisterComponent },
        ]
      },
    ]),
  ],
  providers: [
    authInterceptorProviders
  ]
})
export class AdminModule { }
