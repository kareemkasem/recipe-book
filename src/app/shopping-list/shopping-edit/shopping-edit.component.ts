import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.scss"],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("f") form: NgForm;
  editMode: Boolean = false;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.shoppingListService.itemToEdit.subscribe((ing: ingredient) => {
      this.form.setValue({
        name: ing.name,
        amount: ing.amount,
      });
      this.editMode = true;
    });
  }

  clearInputs() {
    this.editMode = false;
    this.form.reset();
  }

  addIngredient(form: NgForm) {
    const name = form.value.name;
    const amount = form.value.amount;
    const ing: ingredient = new ingredient(name, amount);
    this.shoppingListService.addIngredient(ing, this.editMode);
    this.clearInputs();
  }

  removeIngredient(name: String) {
    this.shoppingListService.removeIngredient(name);
    this.clearInputs();
  }

  // ngOnDestroy() {
  //   this.shoppingListService.itemToEdit.unsubscribe();
  // }
}
