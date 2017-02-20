import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ListingService } from '../listing.service';
import { Listing } from '../listing.model';

@Component({
  selector: 'listing-form',
  templateUrl: './listing-form.component.html',
  styleUrls: ['./listing-form.component.css']
})

export class ListingFormComponent implements OnInit{
  listing: Listing;

  constructor(private listingService: ListingService){}

  onSave(form: NgForm){
    // Update
    if (this.listing) {
      this.listing.content = form.value.content;
      this.listingService.updateListing(this.listing)
          .subscribe(
              result => console.log(result)
          );
      this.listing = null;
    } else {
    // Create
      const listing = new Listing(form.value.content, 'Said');
      this.listingService.addListing(listing)
          .subscribe(
              data => console.log(data),
              error => console.error(error)
          );
      }
    form.resetForm();
  }

  onClear(form: NgForm) {
        this.listing = null;
        form.resetForm();
    }

    ngOnInit() {
        this.listingService.listingIsEdit.subscribe(
            (listing: Listing) => this.listing = listing
        );
    }

}