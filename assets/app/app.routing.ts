import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from "./auth/authentication.component";
import { ListingsComponent } from "./listings/listings.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { SignoutComponent } from "./auth/signout.component";
// import { AUTH_ROUTES } from "./auth/auth.routes";


const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/listings', pathMatch: 'full'},
  { path: 'listings', component: ListingsComponent},
  { path: 'auth', component: AuthenticationComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'signout', component: SignoutComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);