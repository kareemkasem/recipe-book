import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Pizza",
      "the most delicios pizza ever",
      "https://clipartart.com/images/clipart-images-of-pizza-1.png"
    ),
    new Recipe(
      "spaghetti",
      "straight from italy",
      "https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg"
    )
  ];

  constructor() {}
  @Output() recipeSelected = new EventEmitter<Recipe>();

  ngOnInit(): void {}

  sendRecipeData(data: Recipe) {
    this.recipeSelected.emit(data);
  }
}
