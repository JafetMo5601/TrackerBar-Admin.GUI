import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LooggedInGuard } from './shared/services/loogged-in.guard';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './shared/services/auth.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
   { path: 'auth', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule), canActivate: [LooggedInGuard] },
   { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
   { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
