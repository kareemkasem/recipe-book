import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeComponent } from "../recipe/recipe.component";
import { ShoppingListComponent } from "../shopping-list/shopping-list.component";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { RecipeDetailComponent } from "../recipe/recipe-detail/recipe-detail.component";
import { EditRecipeComponent } from "../recipe/edit-recipe/edit-recipe.component";
import { RecipeResolverService } from "../shared/recipe-resolver.service";
import { RecipeDetailGuardService } from "../recipe/recipe-detail/recipe-detail-guard.service";
import { AuthComponent } from "../auth/auth.component";
import { AuthGuard } from "../auth/auth.guard";

const appRoutes: Routes = [
  { path: "", redirectTo: "/auth", pathMatch: "full" },
  {
    path: "recipes",
    component: RecipeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "new", component: EditRecipeComponent },
      {
        path: ":id",
        component: RecipeDetailComponent,
        resolve: [RecipeResolverService],
        canActivate: [RecipeDetailGuardService],
      },
      {
        path: ":id/edit",
        component: EditRecipeComponent,
        resolve: [RecipeResolverService],
        canActivate: [RecipeDetailGuardService],
      },
    ],
  },
  {
    path: "shopping-list",
    component: ShoppingListComponent,
    canActivate: [AuthGuard],
  },
  { path: "auth", component: AuthComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutesModule {}
