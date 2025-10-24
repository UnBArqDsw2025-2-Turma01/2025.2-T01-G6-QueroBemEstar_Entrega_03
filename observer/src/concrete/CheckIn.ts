import { Subject } from "../interfaces/Subject";
import { Observer } from "../interfaces/Observer";
import { TipoNotificacao } from "../domain/TipoNotificacao";
import { Usuario } from "./Usuario";

export class CheckIn implements Subject {
    private idCheckIn: number;
    private observadores: Observer[] = [];

    constructor(id: number) {
        this.idCheckIn = id;
    }

    getIdCheckIn(): number {
        return this.idCheckIn;
    }

    adicionarObservador(o: Observer): void {
        if (o !== null && !this.observadores.includes(o)) {
            this.observadores.push(o);
        }
    }

    removerObservador(o: Observer): void {
        const index = this.observadores.indexOf(o);
        if (index > -1) {
            this.observadores.splice(index, 1);
        }
    }

    notificar(tipo: TipoNotificacao, dados: any): void {
        for (const obs of this.observadores) {
            obs.atualizar(tipo, dados);
        }
    }

    adicionarComentario(comentario: string, autorDoComentario: Usuario): void {
        console.log(`[GATILHO NO CHECKIN ${this.idCheckIn}]: Notificando observadores...`);
        this.notificar(TipoNotificacao.COMENTARIO_CHECKIN, `${autorDoComentario.getNome()} comentou no seu Check-In.`);
    }
}
