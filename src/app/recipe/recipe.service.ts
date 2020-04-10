import { Recipe } from "./recipe.model";
import { ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class RecipeService {
  recipesSubject = new Subject<Recipe[]>();
  recipes: Recipe[] = [];

  public getRecipes() {
    // here we only return a copy not a pointer
    return this.recipes.slice();
  }

  public setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesSubject.next(this.recipes.slice());
  }

  public getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    const checkedIndex = this.recipes.findIndex((x) => x === recipe);
    if (checkedIndex === -1) {
      this.recipes.push(recipe);
      this.recipesSubject.next(this.recipes.slice());
    } else {
      alert("Already Added");
    }
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesSubject.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesSubject.next(this.recipes.slice());
  }
}
