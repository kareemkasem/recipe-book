import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../../recipe.model";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.scss"]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  @Output() recipeClicked = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  showRecipe(): void {
    this.recipeClicked.emit();
  }

  addShadow(event) {
    const target: HTMLElement = event.target.closest(".recipe-list-card");
    target.classList.add("recipe-list-card-shadow");
    setTimeout(() => {
      target.classList.remove("recipe-list-card-shadow");
    }, 250);
  }
}
