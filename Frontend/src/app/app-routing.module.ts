import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthlayoutComponent } from './layout/authlayout/authlayout.component';
import { MainlayoutComponent } from './layout/mainlayout/mainlayout.component';
import { AdmindashboadComponent } from './components/admin/admindashboad/admindashboad.component';
import { AddemployeeComponent } from './components/admin/addemployee/addemployee.component';
import { ProfileComponent } from './components/Shared/profile/profile.component';
import { EmpdashboardComponent } from './components/employee/empdashboard/empdashboard.component';

const routes: Routes = [

  /* ---------- AUTH ROUTES ---------- */
  {
    path: '',
    component: AuthlayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent }
    ]
  },

  /* ---------- ADMIN ROUTES ---------- */
  {
    path: 'admin',
    component: MainlayoutComponent,
    children: [
      { path: 'dashboard', component: AdmindashboadComponent },
      { path: 'add-employee', component: AddemployeeComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  },

  /* ---------- EMPLOYEE ROUTES ---------- */
  {
    path: 'employee',
    component: MainlayoutComponent,
    children: [
      { path: 'dashboard', component: EmpdashboardComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  },

  /* ---------- FALLBACK ---------- */
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
