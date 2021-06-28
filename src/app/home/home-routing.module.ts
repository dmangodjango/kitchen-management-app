import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: "home",
    component: HomePage,
    children: [
      { 
        path: "recipes-list",
        loadChildren: () => import("../pages/recipes-list/recipes-list.module").then(m => m.RecipesListPageModule)

      },
      { 
        path: "recipe-details",
        loadChildren: () => import("../pages/recipe-details/recipe-details.module").then(m => m.RecipeDetailsPageModule)
      },
      { 
        path: "items-list",
        loadChildren: () => import("../pages/items-list/items-list.module").then(m => m.ItemsListPageModule)
      },
      { 
        path: "item-details",
        loadChildren: () => import("../pages/item-details/item-details.module").then(m => m.ItemDetailsPageModule)
      },
      {
        path: "",
        redirectTo: "recipes-list",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
