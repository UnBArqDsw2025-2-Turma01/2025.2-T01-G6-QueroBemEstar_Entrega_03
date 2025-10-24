import { NotificationFactory } from "./concreteCreator/NotificationFactory";
import { TipoNotificacao } from "./domain/TipoNotificacao";

const factory = new NotificationFactory();


factory.createNotification("NTF-001", TipoNotificacao.SEGUIR_USUARIO);
factory.sendNotification();

factory.createNotification("NTF-002", TipoNotificacao.CURTIR_RECEITA);
factory.sendNotification();

factory.createNotification("NTF-003", TipoNotificacao.COMENTAR_RECEITA);
factory.sendNotification();

factory.createNotification("NTF-004", TipoNotificacao.COMENTAR_CHECKIN);
factory.sendNotification();

factory.createNotification("NTF-005", TipoNotificacao.RANKING_COMPETICAO);
factory.sendNotification();