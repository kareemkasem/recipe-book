import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { DataControlService } from "../shared/data-control.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  constructor(private dataControl: DataControlService) {}

  saveData() {
    this.dataControl.storeRecipes();
  }

  fetchData() {
    this.dataControl.fetchRecipes().subscribe();
  }
}
