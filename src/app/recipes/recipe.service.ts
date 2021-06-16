import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "A simple test recipe",
      "https://www.recipetineats.com/wp-content/uploads/2018/09/Honey-Garlic-Chicken-Breast_5.jpg",
      [new Ingredient("chicken", 1), new Ingredient("garlic", 2)]
    ),
    new Recipe(
      "Another Test Recipe",
      "Another simple test recipe",
      "https://www.recipetineats.com/wp-content/uploads/2018/09/Honey-Garlic-Chicken-Breast_5.jpg",
      [new Ingredient("chicken", 1), new Ingredient("garlic", 2)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
