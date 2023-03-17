import { Injectable } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model'
import { ShoppinglistService } from '../shopping-list/shoppinglist.service'
import { Recipe } from './recipe.model'
@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Mejjainne gosto',
      'Authentic chittainga mejbani',
      'https://i.ytimg.com/vi/FRZ3VEOMxz0/maxresdefault.jpg',
      [new Ingredient('bun', 2), new Ingredient('bread', 3)],
    ),
    new Recipe(
      'Kacchi',
      'Authentic dhakai kacchi',
      'https://www.dhakafoodster.com/wp-content/uploads/2021/06/Sultan%E2%80%99s-Diner-Mirpur-Kacchi-Biriyani-1-1024x918.jpg',
      [new Ingredient('biscuits', 2), new Ingredient('banana', 3)],
    ),
  ]
  constructor(private slService: ShoppinglistService) {}
  getRecipes() {
    return this.recipes.slice()
  }

  getRecipe(index: number) {
    return this.recipes[index]
  }
  AddIngredientToShoppinglist(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients)
  }
}
