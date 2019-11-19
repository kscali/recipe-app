import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();


  private recipes: Recipe[] = [
    new Recipe(
      "Shrimp Alfredo", "Delicious Shrimp Alfredo", 
      "https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg", 
      [ 
        new Ingredient("Shrimp", 1),
        new Ingredient("Alfredio", 1),
        new Ingredient("parmesan cheese", 1)
      ]),
    new Recipe(
      "Mongolian Beef", 
      "Delicioius Beef Recipe", 
      "https://www.dinneratthezoo.com/wp-content/uploads/2017/09/mongolian-beef-2.jpg", 
      [ 
        new Ingredient("beef", 2),
        new Ingredient("onions", 3),
        new Ingredient("red peppers", 10)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  onIngredientsToList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}