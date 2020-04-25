import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { RecipeService } from "../recipe/recipe.service";
import { Recipe } from "../recipe/recipe.model";
import { map, tap, exhaustMap, take } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";

@Injectable({
  providedIn: "root",
})
export class DataControlService {
  constructor(
    private recipeService: RecipeService,
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.httpClient
      .put("https://kareem-recipe-book.firebaseio.com/recipes.json", recipes)
      .subscribe();
  }

  fetchRecipes() {
    return this.httpClient
      .get<Recipe[]>("https://kareem-recipe-book.firebaseio.com/recipes.json")
      .pipe(
        map((recipes) => {
          return recipes.map((recipe: Recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => this.recipeService.setRecipes(recipes))
      );
  }
}
