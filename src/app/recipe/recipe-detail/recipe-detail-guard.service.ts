import { Injectable, OnInit } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ActivatedRoute,
  Params,
  Router,
} from "@angular/router";
import { RecipeService } from "../recipe.service";

@Injectable({
  providedIn: "root",
})
export class RecipeDetailGuardService implements CanActivate, OnInit {
  id: number;
  constructor(
    private recipService: RecipeService,
    private currentRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.currentRoute.params.subscribe((params: Params) => {
      this.id = params["id"];
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (
      this.recipService.getRecipe(this.id) ||
      this.router.url.search("recipes") != -1
    ) {
      return true;
    } else {
      console.log(this.router.url);
      this.router.navigate(["/"]);
    }
  }
}
