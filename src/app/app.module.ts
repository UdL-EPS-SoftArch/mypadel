import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { DateTimePickerModule } from 'ng-pick-datetime';

import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { AdminDetailComponent } from './admin/admin-detail/admin-detail.component';
import { AdminService } from './admin/admin.service';
import { AdminFormComponent } from './admin/admin-form/admin-form.component';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';
import { AdminSearchComponent } from './admin/admin-search/admin-search.component';
import { AdminDeleteComponent } from './admin/admin-delete/admin-delete.component';
import { PublicMatchService } from './public-match/PublicMatch.service';
import { PublicMatchSearchComponent } from './public-match/public-match-search/public-match-search.component';
import { PublicMatchListComponent } from './public-match/public-match-list/public-match-list.component';
import {PublicMatchFormComponent} from './public-match/public-match-form/public-match-form.component';
import {PublicMatchDeleteComponent} from './public-match/public-match-delete/public-match-delete.component';
import {PublicMatchEditComponent} from './public-match/public-match-edit/public-match-edit.component';

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
    PublicMatchSearchComponent,
    PublicMatchListComponent,
    PublicMatchFormComponent,
    PublicMatchDeleteComponent,
    PublicMatchEditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    LoginBasicModule,
    DateTimePickerModule
  ],
  providers: [AuthenticationBasicService, LoggedInGuard, AdminService, PublicMatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
