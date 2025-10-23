import React, { useEffect, useState } from "react";

const API_URL = "http://localhost:3000";

interface Score {
  userId: string;
  score: number;
  position: number;
}

export const ScoreBoard: React.FC = () => {
  const [scores, setScores] = useState<Score[]>([]);

  const fetchScores = async () => {
    const res = await fetch(`${API_URL}/competition/scores`);
    const data: Record<string, number> = await res.json();

    const sorted: Score[] = Object.entries(data)
      .map(([userId, score]) => ({
        userId,
        score: Number(score),
        position: 0,
      }))
      .sort((a, b) => b.score - a.score)
      .map((item, index) => ({ ...item, position: index + 1 }));

    setScores(sorted);
  };

  useEffect(() => {
    fetchScores();
    const interval = setInterval(fetchScores, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px", backgroundColor: "#eef" }}>
      <h2>Ranking da Competição</h2>
      {scores.length === 0 && <p>Nenhum participante ainda.</p>}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Posição</th>
            <th>Usuário</th>
            <th>Pontos</th>
          </tr>
        </thead>
        <tbody>
          {scores.map(score => (
            <tr key={score.userId} style={{ borderBottom: "1px solid #ccc" }}>
              <td>{score.position}</td>
              <td>{score.userId}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
