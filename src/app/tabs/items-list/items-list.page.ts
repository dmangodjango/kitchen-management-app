import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.page.html',
  styleUrls: ['./items-list.page.scss'],
})
export class ItemsListPage implements OnInit {

  slideOptions = {
    slidesPerView: 3.2,
    spaceBetween: 25
  };

  itemCategory = [
    {
      category: "Chiller",
      count: 23
    },
    {
      category: "Freezer",
      count: 22
    },    
    {
      category: "Dry",
      count: 40
    },
  ];

  itemList = [
    {
      name: "Brown Button Mushroom",
      lifespan: "14",
      location: "Fridge",
      amount: "9"
    },
    {
      name: "Ketam Bunga",
      lifespan: "30",
      location: "Freezer",
      amount: "10"
    },    
    {
      name: "Udang Harimau",
      lifespan: "20",
      location: "Freezer",
      amount: "15"
    },    
    {
      name: "Maggie Ayam",
      lifespan: "4",
      location: "Dry",
      amount: "4"
    },
    {
      name: "Samyang Carbonara",
      lifespan: "427",
      location: "Dry",
      amount: "4"
    },
    {
      name: "Brown Button Mushroom",
      lifespan: "14",
      location: "Fridge",
      amount: "9"
    },
    {
      name: "Ketam Bunga",
      lifespan: "30",
      location: "Freezer",
      amount: "10"
    },    
    {
      name: "Udang Harimau",
      lifespan: "20",
      location: "Freezer",
      amount: "15"
    },    
    {
      name: "Maggie Ayam",
      lifespan: "4",
      location: "Dry",
      amount: "4"
    },
    {
      name: "Su Tah Ramen",
      lifespan: "427",
      location: "Dry",
      amount: "4"
    }
  ];

  constructor() { }

  ngOnInit() {
    this.setUpCategory();
  }

  setUpCategory() {
    let totalCategoriesCount = 0;

    this.itemCategory.forEach(item => {
      totalCategoriesCount += item.count;
    });

    const allCategories = {
      category: "All",
      count: totalCategoriesCount
    }

    this.itemCategory = [ allCategories, ...this.itemCategory];

  }

}
