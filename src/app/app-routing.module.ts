import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';

import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserFeedComponent } from './components/user-feed/user-feed.component';
import { TravelerProfileComponent } from './components/traveler-profile/traveler-profile.component'
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'user-feed', component: UserFeedComponent, canActivate:[AuthGuard] },
  { path: 'profile/:id', component: TravelerProfileComponent},
  { path: '', component: HomeComponent }, 
  { path: "**", component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
