import React, { useEffect, useState } from "react";

const API_URL = "http://localhost:3000";

interface CompetitionPostData {
  postId: string;
  userId: string;
  competitionId: string;
  text: string;
  imageUrl: string;
  timestamp: number;
  likes?: string[];
}

const PARTICIPANTS = ["userA", "userB", "userC"]; // lista de participantes da competição

export const CompetitionPosts: React.FC = () => {
  const [posts, setPosts] = useState<CompetitionPostData[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<{ [postId: string]: string }>({});

  const fetchPosts = async () => {
    const res = await fetch(`${API_URL}/competition/posts`);
    const data: CompetitionPostData[] = await res.json();
    setPosts(data);
  };

  const handleLike = async (postId: string, userId: string) => {
    if (!userId) {
      alert("Selecione um usuário para curtir!");
      return;
    }

    await fetch(`${API_URL}/competition/posts/${postId}/like`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likedBy: userId }),
    });

    setSelectedUsers({ ...selectedUsers, [postId]: "" });
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
    const interval = setInterval(fetchPosts, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Posts da Competição</h2>
      {posts.length === 0 && <p>Nenhum post ainda.</p>}
      {posts.map(post => (
        <div
          key={post.postId}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "8px",
            backgroundColor: "#fdfdfd",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          <p style={{ marginBottom: "8px" }}>
            <strong>{post.userId}</strong>: {post.text}
          </p>

          {post.imageUrl && (
            <img
              src={post.imageUrl}
              alt="Post"
              style={{ maxWidth: "100%", display: "block", marginBottom: "10px", borderRadius: "5px" }}
            />
          )}

          <p style={{ marginBottom: "8px" }}>Likes: {post.likes?.length || 0}</p>

          {/* Texto antes do LOV */}
          <label
            htmlFor={`select-${post.postId}`}
            style={{ display: "block", marginBottom: "5px", fontWeight: 500 }}
          >
            Usuário que irá curtir:
          </label>

          <select
            id={`select-${post.postId}`}
            value={selectedUsers[post.postId] || ""}
            onChange={(e) =>
              setSelectedUsers({ ...selectedUsers, [post.postId]: e.target.value })
            }
            style={{
              padding: "6px 10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginRight: "10px",
              minWidth: "160px",
              backgroundColor: "#fff",
              cursor: "pointer",
            }}
          >
            <option value="">Selecione um usuário</option>
            {PARTICIPANTS.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>

          <button
            onClick={() => handleLike(post.postId, selectedUsers[post.postId])}
            style={{
              padding: "6px 12px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#4caf50",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Curtir
          </button>
        </div>
      ))}
    </div>
  );
};
