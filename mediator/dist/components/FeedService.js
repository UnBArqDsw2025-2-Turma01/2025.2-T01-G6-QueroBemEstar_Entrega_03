"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedService = void 0;
class FeedService {
    constructor() {
        this.recipes = [];
    }
    addRecipe(recipe) {
        this.recipes.push(recipe);
        console.log(`[FeedService] Receita adicionada: ${recipe.recipeId}`);
    }
    getRecipes() {
        return this.recipes;
    }
}
exports.FeedService = FeedService;
