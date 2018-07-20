import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {map} from 'rxjs/internal/operators';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService) { }

  storeRecipes() {
    return this.http.put('https://udemy-angular-5b186.firebaseio.com/recipes.json',
      this.recipeService.getRecipes());
  }
  getRecipes() {
    this.http.get('https://udemy-angular-5b186.firebaseio.com/recipes.json')
      .subscribe(
      (response) => {
        const recipes: Recipe[] = response.json();
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
