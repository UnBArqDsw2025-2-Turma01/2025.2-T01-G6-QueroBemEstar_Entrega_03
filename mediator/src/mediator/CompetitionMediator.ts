import { PostService } from "../components/PostService";
import { ScoreService } from "../components/ScoreService";
import { NotificationService } from "../components/NotificationService";
import { RankingService } from "../components/RankingService";
import { IMediator } from "./IMediator";

export class CompetitionMediator implements IMediator {
  private competitionParticipants: { [competitionId: string]: string[] } = {};
  private onNotify?: (message: string) => void;
  private awardedPosts: Set<string> = new Set();

  constructor(
    private postService: PostService,
    private scoreService: ScoreService,
    private notificationService: NotificationService,
    private rankingService: RankingService,
    onNotify?: (message: string) => void
  ) {
    this.onNotify = onNotify;
  }

  registerCompetition(competitionId: string, participants: string[]) {
    this.competitionParticipants[competitionId] = participants;
  }

  postLiked(postId: string, likedBy: string, postOwnerId: string) {
    const post = this.postService.getPosts().find(p => p.postId === postId);
    const ownerId = postOwnerId || post?.userId;
    const competitionId = post?.competitionId;
    if (!ownerId) return;

    const message = `${likedBy} curtiu seu post ${postId}`;
    // Persistir notificação via NotificationService
    this.notificationService.notify(ownerId, message);
    if (this.onNotify) this.onNotify(message);

    // Checar se o post atingiu o limite de likes e premiar (apenas uma vez)
    this.checkAndAward(postId, ownerId, competitionId);
  }

  postCreated(postId: string, userId: string, competitionId: string) {
    // Notifica criação de post (persistente) — premiação é feita quando likes chegam ao requisito
    const message = `Post ${postId} criado na competição ${competitionId}`;
    this.notificationService.notify(userId, message);
    if (this.onNotify) this.onNotify(message);
  }

  private checkAndAward(postId: string, userId: string, competitionId?: string) {
    // Evita premiar o mesmo post mais de uma vez
    if (this.awardedPosts.has(postId)) return;

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
      if (this.onNotify) this.onNotify(msg);
    }
  }
}
