import { Injectable } from '@angular/core';
import { Listing } from './listing.model';

@Injectable()
export class ListingService{
  private listings: Listing[] = [];

  addListing(listing: Listing){
    this.listings.push(listing);
  }

  getListing(){
    return this.listings;
  }

  deleteListing(listing: Listing){
    let index = this.listings.indexOf(listing);
    this.listings.splice(index, 1);
  }
}