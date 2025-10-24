import { TipoNotificacao } from "../domain/TipoNotificacao";

export interface Observer {
    atualizar(tipo: TipoNotificacao, dados: any): void;
}
