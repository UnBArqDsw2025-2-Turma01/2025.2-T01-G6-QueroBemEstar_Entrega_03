export class RankingService {
  updateRanking(scores: { [userId: string]: number }) {
    const ranking = Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
      .map(([userId, score], index) => ({ position: index + 1, userId, score }));
    console.log("[RankingService] Ranking atualizado:", ranking);
  }
}
