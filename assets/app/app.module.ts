import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from "./app.component";
import { ListingComponent } from "./listings/listing.component";

@NgModule({
    declarations: [
        AppComponent,
        ListingComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}