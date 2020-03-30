import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeComponent } from "../recipe/recipe.component";
import { ShoppingListComponent } from "../shopping-list/shopping-list.component";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { RecipeDetailComponent } from "../recipe/recipe-detail/recipe-detail.component";
import { EditRecipeComponent } from "../recipe/edit-recipe/edit-recipe.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  {
    path: "recipes",
    component: RecipeComponent,
    children: [
      { path: "new", component: EditRecipeComponent },
      { path: ":id", component: RecipeDetailComponent },
      { path: ":id/edit", component: EditRecipeComponent }
    ]
  },
  { path: "shopping-list", component: ShoppingListComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutesModule {}
