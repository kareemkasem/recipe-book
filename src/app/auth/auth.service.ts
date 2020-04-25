import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { User } from "./user.model";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";

export interface AuthResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

interface user {
  email: string;
  id: string;
  _token: string;
  _tokenExpirationDate: Date;
}

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user = new BehaviorSubject<User>(null);
  private expirationTimer: any;

  constructor(private httpClient: HttpClient, private router: Router) {}

  signUp(email: string, password: string) {
    return this.httpClient
      .post<AuthResponse>(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCgI8S5wlrNEDBWOCbsqxVHPT6iLl1WcOg",
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        tap((resData) => {
          this.handleUser(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  signIn(email: string, password: string) {
    return this.httpClient
      .post<AuthResponse>(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCgI8S5wlrNEDBWOCbsqxVHPT6iLl1WcOg",
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        tap((resData) => {
          this.handleUser(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  logOut() {
    this.user.next(null);
    this.router.navigate(["/auth"]);
    localStorage.removeItem("user");
    if (this.expirationTimer) {
      clearTimeout(this.expirationTimer);
    }
    this.expirationTimer = null;
  }

  private handleUser(
    email: string,
    id: string,
    token: string,
    tokenExpirationDate: number
  ) {
    const expirationDate = new Date(
      new Date().getTime() + tokenExpirationDate * 1000
    );
    const user = new User(email, id, token, expirationDate);
    this.user.next(user);
    localStorage.setItem("user", JSON.stringify(user));
    this.autoLogout(tokenExpirationDate * 1000);
  }

  autoLogin() {
    const userData: user = JSON.parse(localStorage.getItem("user"));
    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );
    if (!loadedUser.token) {
      return;
    } else {
      this.user.next(loadedUser);
      const expiresIn =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expiresIn);
    }
  }

  private autoLogout(expirationTime: number) {
    this.expirationTimer = setTimeout(() => this.logOut(), expirationTime);
  }
}
