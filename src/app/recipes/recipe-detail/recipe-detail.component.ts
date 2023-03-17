import { Component } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  recipe: Recipe
  id: number
  onAddIngredient() {
    this.recipeService.AddIngredientToShoppinglist(this.recipe.Ingredients)
  }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.recipe = this.recipeService.getRecipe(this.id)
    })
  }
  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route })
  }
}
