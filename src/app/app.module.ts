import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { HeaderComponent } from "./header/header.component";
import { AppComponent } from "./app.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { RecipeListComponent } from "./recipe/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipe/recipe-detail/recipe-detail.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { RecipeItemComponent } from "./recipe/recipe-list/recipe-item/recipe-item.component";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { AppRoutesModule } from "./app-routes/app-routes.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditRecipeComponent } from "./recipe/edit-recipe/edit-recipe.component";
import { RecipeService } from "./recipe/recipe.service";
import { RecipeDetailGuardService } from "./recipe/recipe-detail/recipe-detail-guard.service";
import { RecipeResolverService } from "./shared/recipe-resolver.service";
import { AuthComponent } from "./auth/auth.component";
import { LoadingSpinnerComponent } from "./shared/loading-spinner/loading-spinner.component";
import { AuthInterceptor } from "./auth/auth-interceptor.service";
import { AlertComponent } from './shared/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
    PageNotFoundComponent,
    EditRecipeComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutesModule,
    HttpClientModule,
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    RecipeDetailGuardService,
    RecipeResolverService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
