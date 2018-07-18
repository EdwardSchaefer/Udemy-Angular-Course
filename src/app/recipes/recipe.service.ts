import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Taco 1',
      'Bread wrapped around ingredients',
      'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_80,w_auto:100:1280/v1/hellofresh_s3/image/pineapple-poblano-beef-tacos-b7badad1.jpg',
      [
        new Ingredient('bread', 1),
        new Ingredient('meat', 1)
      ]),
    new Recipe('Taco 2',
      'Bread wrapped around ingredients',
      'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_80,w_auto:100:1280/v1/hellofresh_s3/image/pineapple-poblano-beef-tacos-b7badad1.jpg',
      [
        new Ingredient('bread', 1),
        new Ingredient('meat', 1)
      ]),
    ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
