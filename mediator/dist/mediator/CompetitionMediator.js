"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompetitionMediator = void 0;
class CompetitionMediator {
    constructor(postService, scoreService, notificationService, rankingService, onNotify) {
        this.postService = postService;
        this.scoreService = scoreService;
        this.notificationService = notificationService;
        this.rankingService = rankingService;
        this.competitionParticipants = {};
        this.awardedPosts = new Set();
        this.onNotify = onNotify;
    }
    registerCompetition(competitionId, participants) {
        this.competitionParticipants[competitionId] = participants;
    }
    postLiked(postId, likedBy, postOwnerId) {
        const post = this.postService.getPosts().find(p => p.postId === postId);
        const ownerId = postOwnerId || post?.userId;
        const competitionId = post?.competitionId;
        if (!ownerId)
            return;
        const message = `${likedBy} curtiu seu post ${postId}`;
        // Persistir notificação via NotificationService
        this.notificationService.notify(ownerId, message);
        if (this.onNotify)
            this.onNotify(message);
        // Checar se o post atingiu o limite de likes e premiar (apenas uma vez)
        this.checkAndAward(postId, ownerId, competitionId);
    }
    postCreated(postId, userId, competitionId) {
        // Notifica criação de post (persistente) — premiação é feita quando likes chegam ao requisito
        const message = `Post ${postId} criado na competição ${competitionId}`;
        this.notificationService.notify(userId, message);
        if (this.onNotify)
            this.onNotify(message);
    }
    checkAndAward(postId, userId, competitionId) {
        // Evita premiar o mesmo post mais de uma vez
        if (this.awardedPosts.has(postId))
            return;
        if (!competitionId) {
            const post = this.postService.getPosts().find(p => p.postId === postId);
            competitionId = post?.competitionId;
        }
        const likes = this.postService.getLikes(postId);
        const participants = this.competitionParticipants[competitionId || ""] || [];
        const requiredLikes = Math.ceil(participants.length / 2);
        if (likes.length >= requiredLikes) {
            // Adiciona pontos e atualiza ranking
            this.scoreService.addPoints(userId, 10);
            const msg = "Seu post foi validado e você ganhou 10 pontos!";
            this.notificationService.notify(userId, msg);
            this.rankingService.updateRanking(this.scoreService.getScores());
            this.awardedPosts.add(postId);
            if (this.onNotify)
                this.onNotify(msg);
        }
    }
}
exports.CompetitionMediator = CompetitionMediator;
