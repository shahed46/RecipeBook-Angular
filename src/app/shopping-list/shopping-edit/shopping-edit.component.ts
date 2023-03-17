import { outputAst } from '@angular/compiler'
import { Component, ElementRef, ViewChild } from '@angular/core'
import { Ingredient } from 'src/app/shared/ingredient.model'
import { ShoppinglistService } from '../shoppinglist.service'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameRef: ElementRef
  @ViewChild('amountInput') amountRef: ElementRef
  constructor(private slService: ShoppinglistService) {}

  onAddedItem() {
    const ingName = this.nameRef.nativeElement.value
    const ingAmount = this.amountRef.nativeElement.value
    const newIngredient = new Ingredient(ingName, ingAmount)
    this.slService.addIngredient(newIngredient)
  }
}
