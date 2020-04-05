import { ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {
  ingredientsChanged = new Subject<ingredient[]>();
  itemToEdit = new Subject<ingredient>();

  ingredients: ingredient[] = [
    new ingredient("apple", 5),
    new ingredient("potato", 10),
  ];

  getIngredients(): ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ing: ingredient, editMode: Boolean) {
    const existingIndex = this.ingredients.findIndex(
      (x) => x.name === ing.name
    );

    if (existingIndex !== -1 && !editMode) {
      this.ingredients[existingIndex].amount += ing.amount;
    } else if (existingIndex !== -1 && editMode) {
      this.ingredients[existingIndex].amount = ing.amount;
    } else {
      this.ingredients.push(ing);
    }

    this.ingredientsChanged.next(this.ingredients.slice());
  }

  removeIngredient(name: String) {
    const indexToDelete = this.ingredients.findIndex((x) => x.name === name);
    this.ingredients.splice(indexToDelete, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  startEditing(index: number) {
    const ingredientToEdit: ingredient = this.ingredients[index];
    this.itemToEdit.next(ingredientToEdit);
  }
}
