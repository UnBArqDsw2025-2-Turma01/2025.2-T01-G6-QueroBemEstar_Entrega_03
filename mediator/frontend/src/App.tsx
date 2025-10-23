import React from "react";
import { PostForm } from "./components/PostForm";
import { CompetitionPosts } from "./components/CompetitionPosts";
import { RecipeForm } from "./components/RecipeForm";
import { FeedRecipes } from "./components/FeedRecipes";
import { ScoreBoard } from "./components/ScoreBoard";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>QueroBemEstar</h1>
      <PostForm />
      <CompetitionPosts />
      <ScoreBoard />
      <RecipeForm />
      <FeedRecipes />
    </div>
  );
}

export default App;
