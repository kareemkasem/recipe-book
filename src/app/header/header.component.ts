import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy,
} from "@angular/core";
import { DataControlService } from "../shared/data-control.service";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  userSub: Subscription;

  constructor(
    private dataControl: DataControlService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.userSub = this.auth.user.subscribe(
      (userData) => (this.isAuthenticated = !!userData)
    );
  }

  saveData() {
    this.dataControl.storeRecipes();
  }

  fetchData() {
    this.dataControl.fetchRecipes().subscribe();
  }

  logOut() {
    this.auth.logOut();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
