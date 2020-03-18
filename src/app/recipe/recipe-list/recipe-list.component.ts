import { Component, OnInit } from "@angular/core";
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
    )
  ];

  constructor() {}

  ngOnInit(): void {}
}
