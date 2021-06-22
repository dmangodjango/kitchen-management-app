import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {

  itemInfo = {
    name: "Udang Harimau",
    lifespan: "20",
    location: "Freezer",
    amount: "15",
    type: "shrimp"
  };

  constructor() { }

  ngOnInit() {
  }

}
