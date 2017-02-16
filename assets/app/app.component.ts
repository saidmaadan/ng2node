import { Component } from '@angular/core';
import { Listing } from './listings/listing.model';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  listing: Listing = new Listing('This is the listing one', 'Said');    
}