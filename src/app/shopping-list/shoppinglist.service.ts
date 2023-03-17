import { Subject } from 'rxjs'
import { Ingredient } from '../shared/ingredient.model'

export class ShoppinglistService {
  ingredientsChangeed = new Subject<Ingredient[]>()
  private ingredients: Ingredient[] = [
    new Ingredient('Rice', 2),
    new Ingredient('beef', 1),
  ]

  getIngredient() {
    return this.ingredients.slice()
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.ingredientsChangeed.next(this.ingredients.slice())
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients)
    this.ingredientsChangeed.next(this.ingredients.slice())
  }
}
