import { outputAst } from '@angular/compiler'
import { Component, Input } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[]

  constructor(
    private recipeservice: RecipeService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.recipes = recipeservice.getRecipes()
  }
  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }
}
