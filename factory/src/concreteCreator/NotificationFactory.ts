import { Notifier } from "../creator/Notifier";
import { Notification } from "../product/Notification";
import { FollowUserNotification } from "../concreteProduct/FollowUserNotification";
import { RecipeLikeNotification } from "../concreteProduct/RecipeLikeNotification";
import { RecipeCommentNotification } from "../concreteProduct/RecipeCommentNotification";
import { CheckinCommentNotification } from "../concreteProduct/CheckinCommentNotification";
import { CompetitionRankingNotification } from "../concreteProduct/CompetitionRankingNotification";
import { TipoNotificacao } from "../domain/TipoNotificacao";

export class NotificationFactory extends Notifier {
  createNotification(code: string, type: TipoNotificacao): Notification {
    switch (type) {
      case TipoNotificacao.SEGUIR_USUARIO:
        this.notification = new FollowUserNotification(code);
        break;
      case TipoNotificacao.CURTIR_RECEITA:
        this.notification = new RecipeLikeNotification(code);
        break;
      case TipoNotificacao.COMENTAR_RECEITA:
        this.notification = new RecipeCommentNotification(code);
        break;
      case TipoNotificacao.COMENTAR_CHECKIN:
        this.notification = new CheckinCommentNotification(code);
        break;
      case TipoNotificacao.RANKING_COMPETICAO:
        this.notification = new CompetitionRankingNotification(code);
        break;
      default:
        // Esse default só dispara se vier algo fora do enum (ex.: cast incorreto)
        const neverType: never = type;
        throw new Error(`Tipo não suportado: ${neverType}`);
    }
    return this.notification;
  }
}
