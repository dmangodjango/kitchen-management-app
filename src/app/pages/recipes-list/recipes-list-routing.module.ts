import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesListPage } from './recipes-list.page';
import { ItemsListPage } from '../items-list/items-list.page';


const routes: Routes = [
  {
    path: '',
    component: RecipesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesListPageRoutingModule {}
