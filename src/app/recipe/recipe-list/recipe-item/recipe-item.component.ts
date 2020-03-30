import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../../recipe.model";
import { RescipeService } from "../../rescipe.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.scss"]
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() recipeId: number;
}
