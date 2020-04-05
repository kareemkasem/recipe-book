import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { RecipeService } from "../recipe.service";
import {
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-edit-recipe",
  templateUrl: "./edit-recipe.component.html",
  styleUrls: ["./edit-recipe.component.scss"],
})
export class EditRecipeComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  recipeForm;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params["id"];
      this.editMode = !!this.id;
      this.initForm();
    });
  }

  private initForm() {
    let name = "";
    let description = "";
    let imagePath = "";
    let ingredients = this.formBuilder.array([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      name = recipe.name;
      description = recipe.description;
      imagePath = recipe.imagePath;

      for (let ing of recipe.ingredients) {
        ingredients.push(
          this.formBuilder.group({
            name: this.formBuilder.control(ing.name, Validators.required),
            amount: this.formBuilder.control(ing.amount, [
              Validators.required,
              Validators.pattern("^[1-9]+[0-9]*$"),
            ]),
          })
        );
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      description: new FormControl(description, Validators.required),
      imagePath: new FormControl(imagePath, Validators.required),
      ingredients: ingredients,
    });
  }

  get ingredientsControls() {
    return (<FormArray>this.recipeForm.get("ingredients")).controls;
  }

  addIngredientControl() {
    let formArr = this.recipeForm.get("ingredients") as FormArray;
    formArr.push(
      this.formBuilder.group({
        name: this.formBuilder.control(null, Validators.required),
        amount: this.formBuilder.control(null, [
          Validators.required,
          Validators.pattern("^[1-9]+[0-9]*$"),
        ]),
      })
    );
  }

  removeIngredient(index: number) {
    (<FormArray>this.recipeForm.get("ingredients")).removeAt(index);
  }

  ingredientValidity(ingredientName: string): Boolean {
    return (
      this.recipeForm.get(ingredientName).invalid &&
      this.recipeForm.get(ingredientName).touched
    );
  }

  submitForm() {
    console.log(this.recipeForm.value["ingredients"]);
    if (this.editMode) {
      // as the form follows the Recipe interface by design anyway
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.router.navigate(["../"], { relativeTo: this.route });
  }

  reset() {
    this.recipeForm.reset();
  }

  cancel() {
    this.router.navigate(["../"]);
  }
}
