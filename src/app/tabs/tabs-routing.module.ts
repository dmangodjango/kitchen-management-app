import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
 
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: "items-list",
        children: [
          {
            path: "",
            loadChildren: () => import("./items-list/items-list.module")
                                      .then(m => m.ItemsListPageModule)
          }
        ]
      },
      {
        path: "recipes-list",
        children: [
          {
            path: "",
            loadChildren: () => import("./recipes-list/recipes-list.module")
                                      .then(m => m.RecipesListPageModule)
          }
        ]
      },
      {
        path: "",
        redirectTo: "items-list",
        pathMatch: "full"
      }

    ]
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}