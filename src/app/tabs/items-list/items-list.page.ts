import { Component, OnInit, ViewChild } from '@angular/core';
import { IonNav, NavController } from '@ionic/angular';
import { ItemDetailsPage } from './item-details/item-details.page';
@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.page.html',
  styleUrls: ['./items-list.page.scss'],
})
export class ItemsListPage implements OnInit {

  @ViewChild("ionNav", {static: false}) ionNav: IonNav;
  rootPage = ItemsListPage;

  slideOptions = {
    slidesPerView: 3.2,
    spaceBetween: 25
  };

  itemCategory = [
    {
      category: "Chiller",
      count: 23,
      selected: false
    },
    {
      category: "Freezer",
      count: 22,
      selected: false

    },    
    {
      category: "Dry",
      count: 40,
      selected: false
    },
  ];

  itemList = [
    {
      name: "Brown Button Mushroom",
      lifespan: "14",
      location: "Fridge",
      amount: "9",
      type: "vege"
    },
    {
      name: "Ketam Bunga",
      lifespan: "30",
      location: "Freezer",
      amount: "10",
      type: "seafood"

    },    
    {
      name: "Udang Harimau",
      lifespan: "20",
      location: "Freezer",
      amount: "15",
      type: "shrimp"
    },    
    {
      name: "Maggie Ayam",
      lifespan: "4",
      location: "Dry",
      amount: "4",
      type: "noodle"
    },
    {
      name: "Samyang Carbonara",
      lifespan: "427",
      location: "Dry",
      amount: "4",
      type: "noodle"
    },
    {
      name: "1/4 Chicken",
      lifespan: "14",
      location: "Freezer",
      amount: "3",
      type: "chicken"
    },
    {
      name: "Farm Fresh Milk",
      lifespan: "14",
      location: "Fridge",
      amount: "10",
      type: "dairy"
    },    
    {
      name: "Belgian Choc Cake",
      lifespan: "7",
      location: "Freezer",
      amount: "15",
      type: "cake"
    },    
    {
      name: "Pepperoni Pizza",
      lifespan: "2",
      location: "Fridge",
      amount: "4",
      type: "leftover"
    }
  ];

  constructor(
    private navCtrl: NavController
  ) {}

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
      count: totalCategoriesCount,
      selected: true
    }

    this.itemCategory = [ allCategories, ...this.itemCategory];

  }

  changeOnSelectedCategory(index) {
    const previousSelected = this.itemCategory.findIndex(item => item.selected);
    this.itemCategory[previousSelected].selected = false;
    this.itemCategory[index].selected = true;
  }

  goToItemDetails() {
    console.log("nav clicked")
    this.ionNav.push(ItemDetailsPage);
  }

}
