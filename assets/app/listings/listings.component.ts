import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Listing } from './listing.model';

@Component({
    selector: 'listings',
    templateUrl: './listings.component.html',
    styleUrls: ['./listings.component.css']
})
export class ListingsComponent {
  
  @Input() listing: Listing;
  @Output() updateClicked = new EventEmitter<string>();
  // color = 'blue';
  
  onUpdate(){
    this.updateClicked.emit('Updated value');
  }
}