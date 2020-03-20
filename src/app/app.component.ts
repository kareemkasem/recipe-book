import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  showRecipe: boolean = true;
  showShoppingList: boolean;

  onNavigate(eventData: string) {
    if (eventData === "recipes") {
      this.showRecipe = true;
      this.showShoppingList = false;
    } else if (eventData === "shoppingList") {
      this.showRecipe = false;
      this.showShoppingList = true;
    }
  }
}
