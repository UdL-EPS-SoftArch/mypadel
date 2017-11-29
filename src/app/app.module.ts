import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LoginBasicModule } from './login-basic/login-basic.module';
import { AuthenticationBasicService } from './login-basic/authentication-basic.service';
import { LoggedInGuard } from './login-basic/loggedin.guard';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { AdminDetailComponent } from './admin/admin-detail/admin-detail.component';
import { AdminService } from './admin/admin.service';
import { AdminFormComponent } from './admin/admin-form/admin-form.component';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';
import { AdminSearchComponent } from './admin/admin-search/admin-search.component';
import { AdminDeleteComponent } from './admin/admin-delete/admin-delete.component';
import {PlayerListComponent} from "./player/player-list/player-list.component";
import {PlayerFormComponent} from "./player/player-form/player-form.component";
import {PlayerService} from "./player/player.service";
import {PlayerSearchComponent} from "./player/player-search/player-search.component";
import {PlayerDetailComponent} from "./player/player-detail/player-detail.component";
import {PlayerEditComponent} from "./player/player-edit/player-edit.component";
import {PlayerDeleteComponent} from "./player/player-delete/player-delete.component";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AdminListComponent,
    AdminDetailComponent,
    AdminFormComponent,
    AdminEditComponent,
    AdminSearchComponent,
    AdminDeleteComponent,
    AdminSearchComponent,
    PlayerListComponent,
    PlayerFormComponent,
    PlayerSearchComponent,
    PlayerDetailComponent,
    PlayerEditComponent,
    PlayerDeleteComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    LoginBasicModule
  ],
  providers: [AuthenticationBasicService, LoggedInGuard, AdminService,PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
