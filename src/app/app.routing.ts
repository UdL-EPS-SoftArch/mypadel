
import {Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {LoggedInGuard} from './login-basic/loggedin.guard';
import {AdminListComponent} from './admin/admin-list/admin-list.component';
import {AdminDetailComponent} from './admin/admin-detail/admin-detail.component';
import {AdminFormComponent} from './admin/admin-form/admin-form.component';
import {AdminEditComponent} from './admin/admin-edit/admin-edit.component';
import {AdminDeleteComponent} from './admin/admin-delete/admin-delete.component';
import {PublicMatchEditComponent} from './public-match/public-match-edit/public-match-edit.component';
import {CourtListComponent} from './court/court-list/court-list.component';
import {CourtFormComponent} from './court/court-form/court-form.component';
import {CourtEditComponent} from './court/court-edit/court-edit.component';
import {CourtDetailComponent} from './court/court-detail/court-detail.component';
import {CourtDeleteComponent} from './court/court-delete/court-delete.component';
import {PlayerListComponent} from './player/player-list/player-list.component';
import {PlayerFormComponent} from './player/player-form/player-form.component';
import {PlayerDetailComponent} from './player/player-detail/player-detail.component';
import {PlayerEditComponent} from './player/player-edit/player-edit.component';
import {PlayerDeleteComponent} from './player/player-delete/player-delete.component';
import {MatchResultListComponent} from './match-result/matchResult-list/matchResult-list.component';
import {MatchResultDetailComponent} from './match-result/matchResult-detail/matchResult-detail.component';
import {MatchResultEditComponent} from './match-result/matchResult-edit/matchResult-edit.component';
import {MatchResultFormComponent} from './match-result/matchResult-form/matchResult-form.component';
import {MatchFormComponent} from './match/match-form/match-form.component';
import {CustomMatchEditComponent} from './custom-match/custom-match-edit/custom-match-edit.component';
import {PrivateMatchEditComponent} from './private-match/private-match-edit/private-match-edit.component';
import {InviteCreateComponent} from './invite/invite-create/invite-create.component';
import {MatchDetailComponent} from './match/match-detail/match-detail.component';
import {JoinMatchListComponent} from './join-match/joinmatch-list/JoinMatch-list.component';
import {JoinMatchDeleteComponent} from './join-match/joinmatch-delete/JoinMatch-delete.component';
import {JoinMatchDetailComponent} from './join-match/joinmatch-detail/JoinMatch-detail.component';
import {ReservationFormComponent} from './reservation/reservation-form/reservation-form.component';
import {ReservationListComponent} from './reservation/reservation-list/reservation-list.component';
import {ReservationEditComponent} from './reservation/reservation-edit/reservation-edit.component';
import {ReservationDeleteComponent} from './reservation/reservation-delete/reservation-delete.component';
import {ReservationDetailComponent} from './reservation/reservation-detail/reservation-detail.component';
import {MatchListComponent} from './match/match-list/match-list.component';
import {MatchJoinRequestDetailComponent} from './match-join-request/match-join-request-detail/match-join-request-detail.component';
import {MatchJoinRequestListComponent} from './match-join-request/match-join-request-list/match-join-request-list.component';
import {MatchEditComponent} from './match/match-edit/match-edit.component';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'admins/new', component: AdminFormComponent },
  { path: 'admins/:id/edit', component: AdminEditComponent, canActivate: [LoggedInGuard] },
  { path: 'admins', component: AdminListComponent },
  { path: 'admins/:id', component: AdminDetailComponent },
  { path: 'admins/:id/delete', component: AdminDeleteComponent, canActivate: [LoggedInGuard] },
  { path: 'publicMatches/:id/edit', component: PublicMatchEditComponent },
  { path: 'courts', component: CourtListComponent },
  { path: 'courts/new', component: CourtFormComponent },
  { path: 'courts/:id', component: CourtDetailComponent },
  { path: 'courts/:id/edit', component: CourtEditComponent },
  { path: 'courts/:id/delete', component: CourtDeleteComponent },
  { path: 'players', component: PlayerListComponent },
  { path: 'players/new', component: PlayerFormComponent },
  { path: 'players/:id', component: PlayerDetailComponent },
  { path: 'players/:id/edit', component: PlayerEditComponent, canActivate: [LoggedInGuard] },
  { path: 'players/:id/delete', component: PlayerDeleteComponent, canActivate: [LoggedInGuard] },
  { path: 'customMatches/:id/edit', component: CustomMatchEditComponent },
  { path: 'publicMatches/:id/edit', component: PublicMatchEditComponent },
  { path: 'matchResults', component: MatchResultListComponent },
  { path: 'matchJoinRequests/:id', component: MatchJoinRequestDetailComponent },
  { path: 'customMatches/:id/matchJoinRequests', component: MatchJoinRequestListComponent },
  { path: 'privateMatches/:id/edit', component: PrivateMatchEditComponent},
  { path: 'matchInvitations', component: InviteCreateComponent},
  { path: 'matches', component: MatchListComponent},
  { path: 'matches/:id', component: MatchDetailComponent},
  { path: 'matches/new/:type', component: MatchFormComponent},
  { path: 'matches/:id/edit', component: MatchEditComponent},
  { path: 'privateMatches/:id/edit', component: PrivateMatchEditComponent},
  { path: 'matchInvitations', component: InviteCreateComponent},
  { path: 'match/new', component: MatchFormComponent},
  { path: 'matchResults', component: MatchResultListComponent },
  { path: 'matchResults/:id', component: MatchResultDetailComponent },
  { path: 'matchResults/new', component: MatchResultFormComponent },
  { path: 'matchResults/:id/edit', component: MatchResultEditComponent },
  { path: 'joinMatches', component: JoinMatchListComponent},
  { path: 'joinMatches/:id', component: JoinMatchDetailComponent },
  { path: 'joinMatches/:id/delete', component: JoinMatchDeleteComponent, canActivate: [LoggedInGuard] },
  { path: 'reservations/new', component: ReservationFormComponent },
  { path: 'reservations', component: ReservationListComponent },
  { path: 'reservations/:id/edit', component: ReservationEditComponent, canActivate: [LoggedInGuard] },
  { path: 'reservations/:id/delete', component: ReservationDeleteComponent, canActivate: [LoggedInGuard] },
  { path: 'reservations/:id', component: ReservationDetailComponent },
];
