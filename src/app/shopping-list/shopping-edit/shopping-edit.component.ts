import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from "@angular/core";
import { ingredient } from "src/app/shared/ingredient.model";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.scss"]
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("ingName") nameInput: ElementRef;
  @ViewChild("ingAmount") amountInput: ElementRef;

  @Output() addIngredientEvent = new EventEmitter<ingredient>();

  constructor() {}

  ngOnInit(): void {}

  addIngredient() {
    const ingName: string = this.nameInput.nativeElement.value;
    const ingAmount: number = parseInt(this.amountInput.nativeElement.value);
    const ing: ingredient = new ingredient(ingName, ingAmount);
    this.addIngredientEvent.emit(ing);
  }
}
