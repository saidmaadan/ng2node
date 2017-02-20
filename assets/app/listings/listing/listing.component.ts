import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Listing } from '../listing.model';
import { ListingService } from '../listing.service';


@Component({
    selector: 'listing',
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.css']
})
export class ListingComponent {
  
  @Input() listing: Listing;
  @Output() updateClicked = new EventEmitter<string>();
  // color = 'blue';
  constructor(private listingService: ListingService){}
  
  onUpdate(){
    this.updateClicked.emit('Updated value');
  }

  delete(){
    this.listingService.deleteListing(this.listing)
  }
}