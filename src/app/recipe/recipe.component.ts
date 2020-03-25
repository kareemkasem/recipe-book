import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";
import { RescipeService } from "./rescipe.service";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["./recipe.component.scss"],
  providers: [RescipeService]
})
export class RecipeComponent implements OnInit {
  recipeDetails: Recipe;

  constructor(private recipeService: RescipeService) {}

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.recipeDetails = recipe;
    });
  }
}
