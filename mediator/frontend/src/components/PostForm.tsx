import React, { useState } from "react";

const API_URL = "http://localhost:3000";
const PARTICIPANTS = ["userA", "userB", "userC"]; // participantes da competição

export const PostForm: React.FC<{ onPostCreated?: () => void }> = ({ onPostCreated }) => {
  const [userId, setUserId] = useState("");
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const createPost = async () => {
    if (!userId || !text || !imageUrl) {
      alert("Preencha todos os campos!");
      return;
    }

    const post = {
      postId: "p" + Date.now(),
      userId,
      competitionId: "comp1",
      text,
      imageUrl,
      timestamp: Date.now(),
    };

    await fetch(`${API_URL}/competition/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });

    setText("");
    setImageUrl("");
    setUserId("");
    alert("Post criado!");
    onPostCreated?.();
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
      <h2 style={{ marginBottom: "10px" }}>Criar Post na Competição</h2>

      {/* Label e LOV para usuário */}
      <label htmlFor="user-select" style={{ display: "block", marginBottom: "5px", fontWeight: 500 }}>
        Usuário que irá postar:
      </label>
      <select
        id="user-select"
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

      {/* Texto do post */}
      <label htmlFor="text-input" style={{ display: "block", marginBottom: "5px", fontWeight: 500 }}>
        Texto do Post:
      </label>
      <input
        id="text-input"
        placeholder="Digite o texto"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: "6px 10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginBottom: "10px",
          width: "100%",
        }}
      />

      {/* URL da imagem */}
      <label htmlFor="image-input" style={{ display: "block", marginBottom: "5px", fontWeight: 500 }}>
        URL da Imagem:
      </label>
      <input
        id="image-input"
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
        onClick={createPost}
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
        Criar Post
      </button>
    </div>
  );
};
