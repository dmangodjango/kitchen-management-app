import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {

  itemInfo = {
    name: "1/4 Chicken",
    lifespan: "14",
    location: "Freezer",
    amount: "3",
    type: "chicken"
  };

  constructor() { }

  ngOnInit() {
  }

}
