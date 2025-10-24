"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationFactory = void 0;
const Notifier_1 = require("../creator/Notifier");
const FollowUserNotification_1 = require("../concreteProduct/FollowUserNotification");
const RecipeLikeNotification_1 = require("../concreteProduct/RecipeLikeNotification");
const RecipeCommentNotification_1 = require("../concreteProduct/RecipeCommentNotification");
const CheckinCommentNotification_1 = require("../concreteProduct/CheckinCommentNotification");
const CompetitionRankingNotification_1 = require("../concreteProduct/CompetitionRankingNotification");
const TipoNotificacao_1 = require("../domain/TipoNotificacao");
class NotificationFactory extends Notifier_1.Notifier {
    createNotification(code, type) {
        switch (type) {
            case TipoNotificacao_1.TipoNotificacao.SEGUIR_USUARIO:
                this.notification = new FollowUserNotification_1.FollowUserNotification(code);
                break;
            case TipoNotificacao_1.TipoNotificacao.CURTIR_RECEITA:
                this.notification = new RecipeLikeNotification_1.RecipeLikeNotification(code);
                break;
            case TipoNotificacao_1.TipoNotificacao.COMENTAR_RECEITA:
                this.notification = new RecipeCommentNotification_1.RecipeCommentNotification(code);
                break;
            case TipoNotificacao_1.TipoNotificacao.COMENTAR_CHECKIN:
                this.notification = new CheckinCommentNotification_1.CheckinCommentNotification(code);
                break;
            case TipoNotificacao_1.TipoNotificacao.RANKING_COMPETICAO:
                this.notification = new CompetitionRankingNotification_1.CompetitionRankingNotification(code);
                break;
            default:
                // Esse default só dispara se vier algo fora do enum (ex.: cast incorreto)
                const neverType = type;
                throw new Error(`Tipo não suportado: ${neverType}`);
        }
        return this.notification;
    }
}
exports.NotificationFactory = NotificationFactory;
