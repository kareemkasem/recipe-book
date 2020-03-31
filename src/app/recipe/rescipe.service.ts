import { Recipe } from "./recipe.model";
import { ingredient } from "../shared/ingredient.model";

export class RecipeService {
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
    )
  ];

  public getRecipes() {
    // here we only return a copy not a pointer
    return this.recipes.slice();
  }

  public getRecipe(id: number) {
    return this.recipes[id];
  }
}
