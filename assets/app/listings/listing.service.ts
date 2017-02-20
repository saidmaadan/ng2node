import { Http, Response, Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { Listing } from './listing.model';

@Injectable()
export class ListingService{
  private listings: Listing[] = [];
  listingIsEdit = new EventEmitter<Listing>();

  constructor(private http: Http){}

  addListing(listing: Listing){
    const body = JSON.stringify(listing);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/listing', body, {headers: headers})
        .map((response: Response) => {
            const result = response.json();
            const listing = new Listing(result.obj.content, 'Dummy', result.obj._id, null);
            this.listings.push(listing);
            return listing;
        })
        .catch((error: Response) => Observable.throw(error.json()));
  }

  getListings() {
    return this.http.get('http://localhost:3000/listing')
      .map((response: Response) => {
        const listings = response.json().obj;
        let transformedListings: Listing[] = [];
        for (let listing of listings) {
            transformedListings.push(new Listing(listing.content, 'Dummy', listing._id, null));
        }
        this.listings = transformedListings;
        return transformedListings;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  editListing(listing: Listing) {
      this.listingIsEdit.emit(listing);
  }

  updateListing(listing: Listing) {
    const body = JSON.stringify(listing);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.patch('http://localhost:3000/listing/' + listing.listingId, body, {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
  }

  deleteListing(listing: Listing) {
    this.listings.splice(this.listings.indexOf(listing), 1);
    return this.http.delete('http://localhost:3000/listing/' + listing.listingId)
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
  }
}