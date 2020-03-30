import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipe.model";
import { ShoppingListService } from "src/app/shopping-list/shopping-list.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { RescipeService } from "../rescipe.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.scss"]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(
    private shoppingListService: ShoppingListService,
    private recipeService: RescipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  addIngredients() {
    this.recipe.ingredients.forEach(ing =>
      this.shoppingListService.addIngredient(ing)
    );
    this.router.navigate(["/shopping-list"]);
  }

  editRecipe() {
    this.router.navigate(["edit"], { relativeTo: this.route });
  }
}
