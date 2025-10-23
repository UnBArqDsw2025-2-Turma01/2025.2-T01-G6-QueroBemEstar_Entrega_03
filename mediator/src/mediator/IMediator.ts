import { CompetitionPostData } from "../models/types";

export interface IMediator {
  /**
   * Registra uma competição com a lista de participantes.
   */
  registerCompetition(competitionId: string, participants: string[]): void;

  /**
   * Sinaliza que um post foi curtido — o mediator deverá notificar, checar regras e premiar quando aplicável.
   */
  postLiked(postId: string, likedBy: string, postOwnerId?: string): void;

  /**
   * Sinaliza que um post foi criado (opcionalmente usado pelo mediator para notificar criação).
   */
  postCreated(postId: string, userId: string, competitionId: string): void;
}

export type { CompetitionPostData };
