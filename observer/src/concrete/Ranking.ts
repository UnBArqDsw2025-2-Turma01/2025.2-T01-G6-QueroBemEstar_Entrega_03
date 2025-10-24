import { Subject } from "../interfaces/Subject";
import { Observer } from "../interfaces/Observer";
import { TipoNotificacao } from "../domain/TipoNotificacao";

export class Ranking implements Subject {
    private IdCompeticao: number;
    private observadores: Observer[] = [];

    constructor(id: number) {
        this.IdCompeticao = id;
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

    atualizarRanking(): void {
        console.log(`\n[GATILHO NO RANKING ${this.IdCompeticao}]: Notificando observadores...`);
        this.notificar(TipoNotificacao.ATUALIZACAO_RANKING, `O ranking da competição ${this.IdCompeticao} foi atualizado.`);
    }
}
