import { Component, Input } from '@angular/core';
import { Listing } from '../listing.model';
import { ListingService } from '../listing.service';


@Component({
    selector: 'listing',
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.css']
})
export class ListingComponent {
  
  @Input() listing: Listing;
  // @Output() updateClicked = new EventEmitter<string>();
  // color = 'blue';
  constructor(private listingService: ListingService){}
  
  onUpdate(){
    this.listingService.editListing(this.listing);
  }

  onDelete(){
    this.listingService.deleteListing(this.listing)
        .subscribe(
            result => console.log(result)
        );
  }
}