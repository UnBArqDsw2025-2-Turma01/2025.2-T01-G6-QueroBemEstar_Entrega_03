"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreService = void 0;
class ScoreService {
    constructor() {
        this.scores = {};
    }
    addPoints(userId, points) {
        this.scores[userId] = (this.scores[userId] || 0) + points;
        console.log(`[ScoreService] ${userId} ganhou ${points} pontos. Total: ${this.scores[userId]}`);
    }
    getScores() {
        return this.scores;
    }
}
exports.ScoreService = ScoreService;
