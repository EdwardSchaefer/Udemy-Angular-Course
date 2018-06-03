import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Taco', 'Bread wrapped around ingredients',
    'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_80,w_auto:100:1280/v1/hellofresh_s3/image/pineapple-poblano-beef-tacos-b7badad1.jpg'),
    new Recipe('Taco', 'Bread wrapped around ingredients',
      'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_80,w_auto:100:1280/v1/hellofresh_s3/image/pineapple-poblano-beef-tacos-b7badad1.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
