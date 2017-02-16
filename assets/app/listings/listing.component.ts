import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Listing } from './listing.model';

@Component({
    selector: 'listing',
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.css']
})
export class ListingComponent {
  @Input() listing: Listing;
  @Output() updateClicked = new EventEmitter<string>();

  onUpdate(){
    this.updateClicked.emit('Updated value');
  }
    
}