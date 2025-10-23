import React, { useEffect, useState } from "react";

const API_URL = "http://localhost:3000";

interface RecipeData {
  recipeId: string;
  userId: string;
  title: string;
  description: string;
  imageUrl: string;
}

export const FeedRecipes: React.FC = () => {
  const [recipes, setRecipes] = useState<RecipeData[]>([]);

  const fetchRecipes = async () => {
    const res = await fetch(`${API_URL}/feed/recipes`);
    const data: RecipeData[] = await res.json();
    setRecipes(data);
  };

  useEffect(() => {
    fetchRecipes();
    const interval = setInterval(fetchRecipes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Feed de Receitas</h2>
      {recipes.length === 0 && <p>Nenhuma receita ainda.</p>}
      {recipes.map(recipe => (
        <div key={recipe.recipeId} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px", borderRadius: "5px" }}>
          <p><strong>{recipe.userId}</strong>: {recipe.title}</p>
          <p>{recipe.description}</p>
          {recipe.imageUrl && <img src={recipe.imageUrl} alt="Receita" style={{ maxWidth: "200px" }} />}
        </div>
      ))}
    </div>
  );
};
