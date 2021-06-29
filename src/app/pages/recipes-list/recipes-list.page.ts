import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.page.html',
  styleUrls: ['./recipes-list.page.scss'],
})
export class RecipesListPage implements OnInit {

  slideCategoryOptions = {
    slidesPerView: 3,
    spaceBetween: 5
  };

  slideMenuOptions = {
    slidesPerView: 1.5,

  }

  itemCategory = [
    {
      category: "Breakfast",
      selected: true
    },
    {
      category: "Lunch",
      selected: false

    },    
    {
      category: "Snack",
      selected: false
    },
    {
      category: "Dinner",
      selected: false
    }
  ];

  recipeList = [
    { 
      name: "Ayam Masak Kicap",
      cookTime: "30",
      imgSource: "./assets/temp_img/ayam-masak-kicap.JPG",
      noOfAvailIngrendients: "4",
      totalIngredients: "6"
    },
    { 
      name: "Portugese Grill",
      cookTime: "20",
      imgSource: "./assets/temp_img/portugese-grill.jpg",
      noOfAvailIngrendients: "2",
      totalIngredients: "9"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  changeOnSelectedCategory(index) {
    const previousSelected = this.itemCategory.findIndex(item => item.selected);
    this.itemCategory[previousSelected].selected = false;
    this.itemCategory[index].selected = true;
  }

}
