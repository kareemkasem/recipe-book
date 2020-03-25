import { ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<ingredient[]>();

  ingredients: ingredient[] = [
    new ingredient("apple", 5),
    new ingredient("potato", 10)
  ];

  getIngredients(): ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ing: ingredient) {
    const index = this.ingredients.findIndex(x => x.name === ing.name);

    if (index !== -1) {
      this.ingredients[index].amount += ing.amount;
    } else {
      this.ingredients.push(ing);
    }

    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
