"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotificationFactory_1 = require("./concreteCreator/NotificationFactory");
const TipoNotificacao_1 = require("./domain/TipoNotificacao");
const factory = new NotificationFactory_1.NotificationFactory();
/*
TipoNotificacao {
  SEGUIR_USUARIO = "SEGUIR_USUARIO",
  CURTIR_RECEITA = "CURTIR_RECEITA",
  COMENTAR_RECEITA = "COMENTAR_RECEITA",
  COMENTAR_CHECKIN = "COMENTAR_CHECKIN",
  RANKING_COMPETICAO = "RANKING_COMPETICAO",
*/
factory.createNotification("NTF-001", TipoNotificacao_1.TipoNotificacao.SEGUIR_USUARIO);
factory.sendNotification();
factory.createNotification("NTF-002", TipoNotificacao_1.TipoNotificacao.CURTIR_RECEITA);
factory.sendNotification();
factory.createNotification("NTF-003", TipoNotificacao_1.TipoNotificacao.COMENTAR_RECEITA);
factory.sendNotification();
factory.createNotification("NTF-004", TipoNotificacao_1.TipoNotificacao.COMENTAR_CHECKIN);
factory.sendNotification();
factory.createNotification("NTF-005", TipoNotificacao_1.TipoNotificacao.RANKING_COMPETICAO);
factory.sendNotification();
