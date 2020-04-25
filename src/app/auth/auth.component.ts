import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService, AuthResponse } from "./auth.service";
import { finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent {
  loginMode = false;
  isLoading = false;
  error: string;

  constructor(private auth: AuthService, private router: Router) {}

  switchMode() {
    this.loginMode = !this.loginMode;
  }

  onSubmit(form: NgForm) {
    this.isLoading = true;
    this.error = null;
    const email = form.value.email;
    const password = form.value.password;
    let signObs: Observable<AuthResponse>;

    if (this.loginMode) {
      signObs = this.auth.signIn(email, password);
    } else {
      signObs = this.auth.signUp(email, password);
    }

    signObs
      .pipe(
        finalize(() => {
          this.isLoading = false;
          this.router.navigate(["/recipes"]);
        }).bind(this)
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (errorObj) => {
          this.error =
            "Error! " +
            errorObj.error.error.message.toLowerCase().split("_").join(" ");
          // this stupid nesting is because of firebase not me ok ? D:
        }
      );
    form.reset();
  }

  dismissError() {
    this.error = null;
  }
}
