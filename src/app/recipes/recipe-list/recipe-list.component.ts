import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  recipe = new Recipe(
    'Dummy',
    'Dummy',
    'http://icdn.pro/images/es/z/u/zune-pequenas-icono-5511-128.png'
  );

  constructor() { }

  ngOnInit() {
  }

}
