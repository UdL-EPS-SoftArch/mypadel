import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {routes} from './app.routing';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {LoginBasicModule} from './login-basic/login-basic.module';
import {AuthenticationBasicService} from './login-basic/authentication-basic.service';
import {LoggedInGuard} from './login-basic/loggedin.guard';
import {DateTimePickerModule} from 'ng-pick-datetime';

import {AdminListComponent} from './admin/admin-list/admin-list.component';
import {AdminDetailComponent} from './admin/admin-detail/admin-detail.component';
import {AdminService} from './admin/admin.service';
import {AdminFormComponent} from './admin/admin-form/admin-form.component';
import {AdminEditComponent} from './admin/admin-edit/admin-edit.component';
import {AdminSearchComponent} from './admin/admin-search/admin-search.component';
import {AdminDeleteComponent} from './admin/admin-delete/admin-delete.component';
import {CustomMatchService} from './custom-match/custom-match.service';
import {CustomMatchEditComponent} from './custom-match/custom-match-edit/custom-match-edit.component';
import {PublicMatchService} from './public-match/PublicMatch.service';
import {PublicMatchEditComponent} from './public-match/public-match-edit/public-match-edit.component';
import {CourtListComponent} from './court/court-list/court-list.component';
import {CourtFormComponent} from './court/court-form/court-form.component';
import {CourtService} from './court/court.service';
import {CourtDeleteComponent} from './court/court-delete/court-delete.component';
import {CourtDetailComponent} from './court/court-detail/court-detail.component';
import {CourtEditComponent} from './court/court-edit/court-edit.component';
import {CourtSearchComponent} from './court/court-search/court-search.component';
import {CustomMatchDetailComponent} from './custom-match/custom-match-detail/custom-match-detail.component';
import {PlayerListComponent} from './player/player-list/player-list.component';
import {PlayerFormComponent} from './player/player-form/player-form.component';
import {PlayerService} from './player/player.service';
import {PlayerSearchComponent} from './player/player-search/player-search.component';
import {PlayerDetailComponent} from './player/player-detail/player-detail.component';
import {PlayerEditComponent} from './player/player-edit/player-edit.component';
import {PlayerDeleteComponent} from './player/player-delete/player-delete.component';
import {MatchResultListComponent} from './match-result/matchResult-list/matchResult-list.component';
import {PrivateMatchService} from './private-match/private-match.service';
import {PrivateMatchEditComponent} from './private-match/private-match-edit/private-match-edit.component';
import {InviteCreateComponent} from './invite/invite-create/invite-create.component';
import {MatchService} from './match/Match.service';
import {MatchDetailComponent} from './match/match-detail/match-detail.component';
import {JoinMatchService} from './join-match/JoinMatch.service';
import {JoinMatchSearchComponent} from './join-match/joinmatch-search/JoinMatch-search.component';
import {JoinMatchListComponent} from './join-match/joinmatch-list/JoinMatch-list.component';
import {JoinMatchDeleteComponent} from './join-match/joinmatch-delete/JoinMatch-delete.component';
import {JoinMatchDetailComponent} from './join-match/joinmatch-detail/JoinMatch-detail.component';
import {ReservationFormComponent} from './reservation/reservation-form/reservation-form.component';
import {ReservationService} from './reservation/reservation.service';
import {ReservationListComponent} from './reservation/reservation-list/reservation-list.component';
import {ReservationSearchComponent} from './reservation/reservation-search/reservation-search.component';
import {ReservationEditComponent} from './reservation/reservation-edit/reservation-edit.component';
import {ReservationDeleteComponent} from './reservation/reservation-delete/reservation-delete.component';
import {ReservationDetailComponent} from './reservation/reservation-detail/reservation-detail.component';
import {MatchResultEditComponent} from './match-result/matchResult-edit/matchResult-edit.component';
import {MatchResultFormComponent} from './match-result/matchResult-form/matchResult-form.component';
import {MatchResultSearchComponent} from './match-result/matchResult-search/matchResult-search.component';
import {MatchResultService} from './match-result/MatchResult.service';
import {MatchFormComponent} from './match/match-form/match-form.component';
import {MatchEditComponent} from './match/match-edit/match-edit.component';
import {MatchJoinRequestService} from './match-join-request/match-join-request.service';
import {MatchJoinRequestListComponent} from './match-join-request/match-join-request-list/match-join-request-list.component';
import {MatchJoinRequestDetailComponent} from './match-join-request/match-join-request-detail/match-join-request-detail.component';
import {MatchSearchComponent} from './match/match-search/match-search.component';
import {MatchListComponent} from './match/match-list/match-list.component';


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
    PublicMatchEditComponent,
    CourtListComponent,
    CourtFormComponent,
    CourtDeleteComponent,
    CourtDetailComponent,
    CourtEditComponent,
    CourtSearchComponent,
    CustomMatchDetailComponent,
    PlayerListComponent,
    PlayerFormComponent,
    PlayerSearchComponent,
    PlayerDetailComponent,
    PlayerEditComponent,
    PlayerDeleteComponent,
    CustomMatchEditComponent,
    PublicMatchEditComponent,
    MatchResultListComponent,
    MatchJoinRequestDetailComponent,
    MatchJoinRequestListComponent,
    PrivateMatchEditComponent,
    InviteCreateComponent,
    MatchSearchComponent,
    MatchFormComponent,
    MatchEditComponent,
    MatchDetailComponent,
    MatchListComponent,
    JoinMatchListComponent,
    JoinMatchSearchComponent,
    JoinMatchDeleteComponent,
    JoinMatchDetailComponent,
    ReservationFormComponent,
    ReservationListComponent,
    ReservationSearchComponent,
    ReservationEditComponent,
    ReservationDeleteComponent,
    ReservationDetailComponent,
    MatchResultEditComponent,
    MatchResultFormComponent,
    MatchResultListComponent,
    MatchResultSearchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    LoginBasicModule,
    DateTimePickerModule,
  ],
  providers: [AuthenticationBasicService, LoggedInGuard, AdminService, PublicMatchService,
              PlayerService, CustomMatchService, CourtService, MatchService, PrivateMatchService,
              JoinMatchService, ReservationService, MatchResultService, MatchJoinRequestService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
