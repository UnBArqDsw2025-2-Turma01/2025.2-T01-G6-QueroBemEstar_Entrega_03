import { RecipeData } from "../models/types";

export class FeedService {
  private recipes: RecipeData[] = [];

  addRecipe(recipe: RecipeData) {
    this.recipes.push(recipe);
    console.log(`[FeedService] Receita adicionada: ${recipe.recipeId}`);
  }

  getRecipes() {
    return this.recipes;
  }
}
