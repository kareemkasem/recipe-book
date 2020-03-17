import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { HeaderComponent } from "./header/header.component";
import { AppComponent } from "./app.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { RecipeListComponent } from "./recipe/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipe/recipe-detail/recipe-detail.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeItemComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
