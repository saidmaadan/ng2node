import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { SigninComponent } from "./auth/signin.component";
import { SignupComponent } from "./auth/signup.component";
import { SignoutComponent } from "./auth/signout.component";
import { ListingsComponent } from "./listings/listings.component";
import { ListingComponent } from "./listings/listing/listing.component";
import { ListingListComponent } from "./listings/listing-list/listing-list.component";
import { ListingFormComponent } from "./listings/listing-form/listing-form.component";
import { ListingService } from "./listings/listing.service";
import { routing } from "./app.routing";
import { AuthService } from "./auth/auth.service";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        AuthenticationComponent,
        SigninComponent,
        SignupComponent,
        SignoutComponent,
        ListingsComponent,
        ListingComponent,
        ListingListComponent,
        ListingFormComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      routing,
      ReactiveFormsModule,
      HttpModule],
    bootstrap: [AppComponent],
    providers: [ListingService, AuthService]
})
export class AppModule {

}