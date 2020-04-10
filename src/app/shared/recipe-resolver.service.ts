import { Injectable } from "@angular/core";
import { Recipe } from "../recipe/recipe.model";
import { DataControlService } from "./data-control.service";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { RecipeService } from "../recipe/recipe.service";

@Injectable({
  providedIn: "root",
})
export class RecipeResolverService implements Resolve<Recipe[]> {
  constructor(
    private dataControl: DataControlService,
    private recipeService: RecipeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipeService.getRecipes();
    if (recipes.length === 0) {
      return this.dataControl.fetchRecipes();
    } else {
      return recipes;
    }
  }
}
