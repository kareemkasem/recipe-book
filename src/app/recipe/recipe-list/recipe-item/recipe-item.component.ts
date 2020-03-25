import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../../recipe.model";
import { RescipeService } from "../../rescipe.service";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.scss"]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RescipeService) {}

  ngOnInit(): void {}

  showRecipe(): void {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

  addShadow(event) {
    const target: HTMLElement = event.target.closest(".recipe-list-card");
    target.classList.add("recipe-list-card-shadow");
    setTimeout(() => {
      target.classList.remove("recipe-list-card-shadow");
    }, 250);
  }
}
