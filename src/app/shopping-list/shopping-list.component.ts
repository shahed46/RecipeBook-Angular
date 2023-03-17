import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { Ingredient } from '../shared/ingredient.model'
import { ShoppinglistService } from './shoppinglist.service'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[]
  igChangeSub: Subscription
  constructor(private slService: ShoppinglistService) {}
  ngOnInit() {
    this.ingredients = this.slService.getIngredient()
    this.igChangeSub = this.slService.ingredientsChangeed.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients
      },
    )
  }
  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe()
  }
}
