import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ItemDetailsPage } from './pages/item-details/item-details.page';

// Isolate pages
import { RecipeDetailsPage } from "./pages/recipe-details/recipe-details.page";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },  
  {
    path: '',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: "recipe-details",
    component: RecipeDetailsPage,
    loadChildren: () => import('./pages/recipe-details/recipe-details.module').then( m => m.RecipeDetailsPageModule)
  },
  {
    path: "item-details",
    component: ItemDetailsPage
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
