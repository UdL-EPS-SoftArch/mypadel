import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoggedInGuard } from './login-basic/loggedin.guard';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { AdminDetailComponent } from './admin/admin-detail/admin-detail.component';
import { AdminFormComponent } from './admin/admin-form/admin-form.component';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';
import {PlayerListComponent} from "./player/player-list/player-list.component";
import {PlayerFormComponent} from "./player/player-form/player-form.component";
import { AdminDeleteComponent } from './admin/admin-delete/admin-delete.component';
import {PlayerDetailComponent} from "./player/player-detail/player-detail.component";
import {PlayerEditComponent} from "./player/player-edit/player-edit.component";
import {PlayerDeleteComponent} from "./player/player-delete/player-delete.component";
import {PublicMatchListComponent} from './public-match/public-match-list/public-match-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'admins/new', component: AdminFormComponent },
  { path: 'admins/:id/edit', component: AdminEditComponent, canActivate: [LoggedInGuard] },
  { path: 'admins', component: AdminListComponent },
  { path: 'admins/:id', component: AdminDetailComponent },
  { path: 'admins/:id/delete', component: AdminDeleteComponent, canActivate: [LoggedInGuard] },
  {path: 'players',component:PlayerListComponent},
  {path: 'players/new',component:PlayerFormComponent},
  { path: 'players/:id', component: PlayerDetailComponent },
  { path: 'players/:id/edit', component: PlayerEditComponent, canActivate: [LoggedInGuard] },
  { path: 'players/:id/delete', component: PlayerDeleteComponent, canActivate: [LoggedInGuard] },

  { path: 'publicMatches', component: PublicMatchListComponent},
];
