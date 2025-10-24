import { TipoNotificacao } from "../domain/TipoNotificacao";
import { Observer } from "./Observer";

export interface Subject {
    adicionarObservador(o: Observer): void;
    removerObservador(o: Observer): void;
    notificar(tipo: TipoNotificacao, dados: any): void;
}
