export class ScoreService {
  private scores: { [userId: string]: number } = {};

  addPoints(userId: string, points: number) {
    this.scores[userId] = (this.scores[userId] || 0) + points;
    console.log(`[ScoreService] ${userId} ganhou ${points} pontos. Total: ${this.scores[userId]}`);
  }

  getScores() {
    return this.scores;
  }
}
