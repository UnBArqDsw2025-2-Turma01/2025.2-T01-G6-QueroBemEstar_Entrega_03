import { Subject } from "../interfaces/Subject";
import { Observer } from "../interfaces/Observer";
import { TipoNotificacao } from "../domain/TipoNotificacao";
import { Usuario } from "./Usuario";

export class Receita implements Subject {
    private titulo: string;
    private observadores: Observer[] = [];

    constructor(titulo: string) {
        this.titulo = titulo;
    }

    getTitulo(): string {
        return this.titulo;
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

    adicionarCurtida(autorDaCurtida: Usuario): void {
        console.log(`[GATILHO NA RECEITA ${this.titulo}]: Notificando observadores...`);
        this.notificar(TipoNotificacao.CURTIDA_RECEITA, `${autorDaCurtida.getNome()} curtiu sua receita.`);
    }

    adicionarComentario(comentario: string, autorDoComentario: Usuario): void {
        console.log(`[GATILHO NA RECEITA ${this.titulo}]: Notificando observadores...`);
        this.notificar(TipoNotificacao.COMENTARIO_RECEITA, `${autorDoComentario.getNome()} comentou: ${comentario}`);
    }
}
