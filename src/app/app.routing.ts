import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoggedInGuard } from './login-basic/loggedin.guard';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { AdminDetailComponent } from './admin/admin-detail/admin-detail.component';
import { AdminFormComponent } from './admin/admin-form/admin-form.component';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './admin/admin-delete/admin-delete.component';
import { ReservationFormComponent } from './reservation/reservation-form/reservation-form.component';
import { ReservationListComponent } from "./reservation/reservation-list/reservation-list.component";

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'admins/new', component: AdminFormComponent },
  { path: 'admins/:id/edit', component: AdminEditComponent, canActivate: [LoggedInGuard] },
  { path: 'admins', component: AdminListComponent },
  { path: 'admins/:id', component: AdminDetailComponent },
  { path: 'admins/:id/delete', component: AdminDeleteComponent, canActivate: [LoggedInGuard] },
  { path: 'reservations/new', component: ReservationFormComponent },
  { path: 'reservations', component: ReservationListComponent }
];
