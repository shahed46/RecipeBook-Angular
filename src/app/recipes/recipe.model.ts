import { Ingredient } from '../shared/ingredient.model'

export class Recipe {
  public name: string
  public description: string
  public imagePath: string
  public Ingredients: Ingredient[]

  constructor(
    name: string,
    description: string,
    imagePath: string,
    Ingredients: Ingredient[],
  ) {
    this.name = name
    this.description = description
    this.imagePath = imagePath
    this.Ingredients = Ingredients
  }
}
