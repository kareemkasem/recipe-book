import { Component } from "@angular/core";
import { RescipeService } from "./rescipe.service";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["./recipe.component.scss"],
  providers: [RescipeService]
})
export class RecipeComponent {}
