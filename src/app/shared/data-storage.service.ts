import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {map} from 'rxjs/internal/operators';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService,
              private authService: AuthService) { }

  storeRecipes() {
    const token = this.authService.getIdToken();
    // const headers = new HttpHeaders().set('Authorizationn', 'Bearer asdf');

    /*
    return this.http.put('https://udemy-angular-5b186.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(), {
      observe: 'body',
        params: new HttpParams().set('auth', token)
        // headers: headers
      });
    */
    const req = new HttpRequest('PUT', 'https://udemy-angular-5b186.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(), {reportProgress: true, params: new HttpParams().set('auth', token)});
    return this.http.request(req);
  }
  getRecipes() {
    const token = this.authService.getIdToken();

    // this.http.get<Recipe[]>('https://udemy-angular-5b186.firebaseio.com/recipes.json?auth=' + token)
    this.http.get<Recipe[]>('https://udemy-angular-5b186.firebaseio.com/recipes.json?auth=' + token, {
      observe: 'body',
      responseType: 'json'
    })
      .subscribe(
      (recipes) => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
