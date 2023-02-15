import { outputAst } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
 @ViewChild('nameInput') nameRef:ElementRef
 @ViewChild('amountInput') amountRef:ElementRef
 @Output() ingredientAdded=new EventEmitter<Ingredient>

 onAddedItem()
 {
  const ingName=this.nameRef.nativeElement.value
  const ingAmount=this.amountRef.nativeElement.value
  const newIngredient=new Ingredient(ingName,ingAmount)
  this.ingredientAdded.emit(newIngredient);
 }
}
