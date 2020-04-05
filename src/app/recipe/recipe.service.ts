import { Recipe } from "./recipe.model";
import { ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class RecipeService {
  recipesSubject = new Subject<Recipe[]>();
  recipes: Recipe[] = [
    new Recipe(
      "Pizza",
      "the most delicios pizza ever",
      "https://clipartart.com/images/clipart-images-of-pizza-1.png",
      [new ingredient("tomato", 5), new ingredient("flour", 1)]
    ),
    new Recipe(
      "Spaghetti",
      "straight from italy",
      "https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg",
      [new ingredient("tomato", 5), new ingredient("spaghetti", 1)]
    ),
    new Recipe(
      "burger",
      "so damn thicc",
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=602&q=80",
      [
        new ingredient("killed animal", 1),
        new ingredient("tomato slices", 2),
        new ingredient("bread", 2),
      ]
    ),
  ];

  public getRecipes() {
    // here we only return a copy not a pointer
    return this.recipes.slice();
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
