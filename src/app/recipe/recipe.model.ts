// this is simply a model to be used by typescript to define how a variable should be like

import { ingredient } from "../shared/ingredient.model";

export class Recipe {
  constructor(
    public name: string,
    public description: string,
    public imagePath: string,
    public ingredients: ingredient[]
  ) {}
}
