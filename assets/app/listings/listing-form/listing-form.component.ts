import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ListingService } from '../listing.service';
import { Listing } from '../listing.model';

@Component({
  selector: 'listing-form',
  templateUrl: './listing-form.component.html',
  styleUrls: ['./listing-form.component.css']
})

export class ListingFormComponent{

  constructor(private listingService: ListingService){}

  onSave(form: NgForm){
    const listing = new Listing(form.value.content, "Said");
    this.listingService.addListing(listing);
    form.resetForm();

  }

  // onSave(value: string){
  //   const listing = new Listing(value, "Said");
  //   this.listingService.addListing(listing);

  // }

}