import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Output() recipeOrShoppingList = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSelect(viewOption: string): void {
    this.recipeOrShoppingList.emit(viewOption);
  }
}
