import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from "@angular/core";
import { ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.scss"]
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("ingName") nameInput: ElementRef;
  @ViewChild("ingAmount") amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  addIngredient() {
    if (this.nameInput && this.amountInput) {
      const ingName: string = this.nameInput.nativeElement.value;
      const ingAmount: number = parseInt(this.amountInput.nativeElement.value);
      const ing: ingredient = new ingredient(ingName, ingAmount);
      this.shoppingListService.addIngredient(ing);
    }
  }

  addIngredientEnter(event) {
    console.log(event);
    if (event.key === "Enter") {
      this.addIngredient();
    }
  }
}
