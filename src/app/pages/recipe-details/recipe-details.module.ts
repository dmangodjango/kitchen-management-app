import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeDetailsPageRoutingModule } from './recipe-details-routing.module';

import { RecipeDetailsPage } from './recipe-details.page';
import { SharedDirectivesModule } from 'src/app/directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeDetailsPageRoutingModule,
    SharedDirectivesModule
  ],
  declarations: [RecipeDetailsPage]
})
export class RecipeDetailsPageModule {}
