import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ShitListComponent } from './shit-list/shit-list.component';
import { AuthGuard } from './providers/auth-guard.service';
import { IdentityService } from './providers/identity.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent},
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo:'counter', pathMatch: 'full'},
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'shit', component: ShitListComponent},
      { path: '**', pathMatch: 'full', component: HomeComponent },

    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [ AuthGuard, IdentityService ]
})
export class AppRoutingModule { }




//---------Goes inside of routes
  // {
  //   path: 'admin',
  //   canActivate: [AuthGuard],
  //   canActivateChild: [AuthGuard],
  //   canLoad: [AuthGuard],
  // },

  //-------Goes in providers:[]
    // AuthGuard,
    // CanDeactivateGuard,
    // UserProfileService
