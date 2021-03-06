import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LooggedInGuard } from './shared/services/loogged-in.guard';
import { AuthGuard } from './shared/services/auth.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ManagementComponent } from './components/management/management.component';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/profile/edit/edit.component';
import { UpdateBarComponent } from './components/management/update-bar/update-bar.component';


const routes: Routes = [
   { path: 'auth', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule), canActivate: [LooggedInGuard] },
   { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
   { path: 'profile/:user_id', component: EditComponent, canActivate: [AuthGuard] },
   { path: 'admin-restaurants', component: ManagementComponent, canActivate: [AuthGuard] },
   { path: 'restaurant/:restaurant_id', component: UpdateBarComponent, canActivate: [AuthGuard] },
   { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
   { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
