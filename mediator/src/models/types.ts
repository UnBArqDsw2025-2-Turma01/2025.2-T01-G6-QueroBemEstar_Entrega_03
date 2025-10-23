export interface CompetitionPostData {
  postId: string;
  userId: string;
  competitionId: string;
  text: string;
  imageUrl: string;
  timestamp: number;
}

export interface RecipeData {
  recipeId: string;
  userId: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string;
  imageUrl: string;
  timestamp: number;
}
