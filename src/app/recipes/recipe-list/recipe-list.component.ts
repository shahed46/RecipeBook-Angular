import { outputAst } from '@angular/compiler'
import { Component, EventEmitter, Output } from '@angular/core'
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe(
      'Mejjainne gosto',
      'Authentic chittainga mejbani',
      'https://i.ytimg.com/vi/FRZ3VEOMxz0/maxresdefault.jpg',
    ),
    new Recipe(
      'Kacchi',
      'Authentic dhakai kacchi',
      'https://www.dhakafoodster.com/wp-content/uploads/2021/06/Sultan%E2%80%99s-Diner-Mirpur-Kacchi-Biriyani-1-1024x918.jpg',
    ),
  ]
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}
