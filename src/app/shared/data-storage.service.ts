import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {map} from 'rxjs/internal/operators';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService,
              private authService: AuthService) { }

  storeRecipes() {
    const token = this.authService.getIdToken();

    return this.http.put('https://udemy-angular-5b186.firebaseio.com/recipes.json?auth=' + token,
      this.recipeService.getRecipes());
  }
  getRecipes() {
    const token = this.authService.getIdToken();

    this.http.get('https://udemy-angular-5b186.firebaseio.com/recipes.json?auth=' + token)
      .subscribe(
      (response) => {
        const recipes: Recipe[] = response.json();
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
