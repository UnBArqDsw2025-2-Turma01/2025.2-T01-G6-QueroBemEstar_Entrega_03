import React, { useState } from "react";

const API_URL = "http://localhost:3000";
const PARTICIPANTS = ["userA", "userB", "userC"]; // participantes da competição

export const RecipeForm: React.FC = () => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const createRecipe = async () => {
    if (!userId || !title || !description) {
      alert("Preencha todos os campos!");
      return;
    }

    const recipe = {
      recipeId: "r" + Date.now(),
      userId,
      title,
      description,
      ingredients: [],
      instructions: "",
      imageUrl,
      timestamp: Date.now(),
    };

    await fetch(`${API_URL}/feed/recipes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipe),
    });

    setUserId("");
    setTitle("");
    setDescription("");
    setImageUrl("");
    alert("Receita adicionada!");
  };

  return (
    <div
      style={{
        padding: "15px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#fdfdfd",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        marginBottom: "20px",
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>Adicionar Receita</h2>

      {/* Label e LOV para usuário */}
      <label htmlFor="recipe-user" style={{ display: "block", marginBottom: "5px", fontWeight: 500 }}>
        Usuário que está adicionando:
      </label>
      <select
        id="recipe-user"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        style={{
          padding: "6px 10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginBottom: "10px",
          width: "100%",
          cursor: "pointer",
          backgroundColor: "#fff",
        }}
      >
        <option value="">Selecione um usuário</option>
        {PARTICIPANTS.map((u) => (
          <option key={u} value={u}>
            {u}
          </option>
        ))}
      </select>

      {/* Título da receita */}
      <label htmlFor="recipe-title" style={{ display: "block", marginBottom: "5px", fontWeight: 500 }}>
        Título:
      </label>
      <input
        id="recipe-title"
        placeholder="Digite o título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          padding: "6px 10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginBottom: "10px",
          width: "100%",
        }}
      />

      {/* Descrição */}
      <label htmlFor="recipe-description" style={{ display: "block", marginBottom: "5px", fontWeight: 500 }}>
        Descrição:
      </label>
      <input
        id="recipe-description"
        placeholder="Digite a descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{
          padding: "6px 10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginBottom: "10px",
          width: "100%",
        }}
      />

      {/* URL da imagem */}
      <label htmlFor="recipe-image" style={{ display: "block", marginBottom: "5px", fontWeight: 500 }}>
        URL da Imagem:
      </label>
      <input
        id="recipe-image"
        placeholder="Cole a URL da imagem"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        style={{
          padding: "6px 10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginBottom: "15px",
          width: "100%",
        }}
      />

      <button
        onClick={createRecipe}
        style={{
          padding: "8px 16px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#4caf50",
          color: "#fff",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Adicionar Receita
      </button>
    </div>
  );
};
