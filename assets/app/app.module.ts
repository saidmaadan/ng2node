import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from "./app.component";
import { ListingComponent } from "./listings/listing.component";
import { ListingListComponent } from "./listings/listing-list/listing-list.component";
import { ListingFormComponent } from "./listings/listing-form/listing-form.component";
import { ListingService } from "./listings/listing.service";

@NgModule({
    declarations: [
        AppComponent,
        ListingComponent,
        ListingListComponent,
        ListingFormComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule],
    bootstrap: [AppComponent],
    providers: [ListingService]
})
export class AppModule {

}