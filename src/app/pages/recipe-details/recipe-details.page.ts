import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {

  slideOptions = {
    slidesPerView: 3.5,

  }

  recipeInfo = {
    name: "Ayam Masak Kicap",
    time: "30",
    ingredients: "6",
    serve: "3",
    cal: "500",
    imgSrc: "./assets/temp_img/ayam-masak-kicap.JPG"
  }

  ingredientList = [
    {
      name: "1/4 Ayam",
      type: "chicken",
      amount: "200"
    },
    {
      name: "Minyak Masak",
      type: "oil",
      amount: "10"
    },
    {
      name: "Kicap Manis",
      type: "sauce",
      amount: "10"
    },
    {
      name: "Serbuk Kunyit",
      type: "spices",
      amount: "5"
    },
    {
      name: "Cili Padi",
      type: "chilli",
      amount: "50"
    },
    {
      name: "Bawang Holland",
      type: "onion",
      amount: "50"
    },    
    {
      name: "Bawang Putih",
      type: "garlic",
      amount: "30"
    }
  ];


  cookDirections = [
    {
      directions: "Potong ayam kepada bahagian sederhana kecil."
    },    
    {
      directions: "Gaul dengan kunyit dan garam.Goreng separuh masak. Angkat dan letak ketepi."
    },
    {
      directions: "Tumbuk kasar bahan"
    },
    {
      directions: "Panaskan 4 camca besar minyak. Tumis bahan tumbuk kasarsehingga kekuningan dan naik bau."
    },
    { directions: "Masukkan ayam, sos tiram dan kicap beserta sedikit air (1 cawan). Kacau dan tutup, biarkan sehingga ayam menjadi empukPotong ayam kepada bahagian sederhana kecil."
    },    
    {
      directions: "Kemudian masukkan cili padi dan bawang besar, biar 5 minit. Siap untuk dimakan."
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
