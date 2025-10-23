"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankingService = void 0;
class RankingService {
    updateRanking(scores) {
        const ranking = Object.entries(scores)
            .sort((a, b) => b[1] - a[1])
            .map(([userId, score], index) => ({ position: index + 1, userId, score }));
        console.log("[RankingService] Ranking atualizado:", ranking);
    }
}
exports.RankingService = RankingService;
