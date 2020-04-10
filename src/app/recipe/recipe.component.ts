import { Component, OnInit } from "@angular/core";
import { DataControlService } from "../shared/data-control.service";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["./recipe.component.scss"],
})
export class RecipeComponent implements OnInit {
  constructor(private dataControl: DataControlService) {}
  ngOnInit() {
    this.dataControl.fetchRecipes().subscribe();
  }
}
