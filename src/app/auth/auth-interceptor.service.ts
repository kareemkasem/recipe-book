import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpParams,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { take, exhaustMap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.auth.user.pipe(
      take(1),
      exhaustMap((userData) => {
        if (userData) {
          const modifiedReq = req.clone({
            params: new HttpParams().set("auth", userData.token),
          });
          return next.handle(modifiedReq);
        } else {
          return next.handle(req);
        }
      })
    );
  }
}
