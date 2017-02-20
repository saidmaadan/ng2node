import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing.model';
import { ListingService } from '../listing.service';


@Component({
  selector: 'listing-list',
  templateUrl: './listing-list.component.html',
  styleUrls: ['./listing-list.component.css']
})

export class ListingListComponent implements OnInit{
  listings: Listing[];

  constructor(private listingService: ListingService){
  }

  ngOnInit(){
    this.listings = this.listingService.getListing();
  }
    
}