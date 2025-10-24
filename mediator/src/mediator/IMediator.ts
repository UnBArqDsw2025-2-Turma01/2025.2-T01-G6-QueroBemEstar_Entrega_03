import { CompetitionPostData } from "../models/types";

export interface IMediator {
  registerCompetition(competitionId: string, participants: string[]): void;
  postLiked(postId: string, likedBy: string, postOwnerId?: string): void;
  postCreated(postId: string, userId: string, competitionId: string): void;
}

export type { CompetitionPostData };
