import { Observer } from "../interfaces/Observer";
import { Subject } from "../interfaces/Subject";
import { TipoNotificacao } from "../domain/TipoNotificacao";
import { Receita } from "./Receita";
import { CheckIn } from "./CheckIn";

export class Usuario implements Observer, Subject {
    private nome: string;
    private observadores: Observer[] = [];

    constructor(nome: string) {
        this.nome = nome;
    }

    getNome(): string {
        return this.nome;
    }

    atualizar(tipo: TipoNotificacao, dados: any): void {
        console.log(`  -> Notificação para ${this.nome}: ${tipo} - ${dados}`);
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

    seguir(usuarioAlvo: Usuario): void {
        console.log(`\n--- Ação: ${this.nome} seguiu ${usuarioAlvo.getNome()} ---`);
        usuarioAlvo.serSeguidoPor(this);
    }

    curtir(receitaAlvo: Receita): void {
        console.log(`\n--- Ação: ${this.nome} curtiu a receita '${receitaAlvo.getTitulo()}' ---`);
        receitaAlvo.adicionarCurtida(this);
    }

    comentar(receitaAlvo: Receita, comentario: string): void {
        console.log(`\n--- Ação: ${this.nome} comentou na receita '${receitaAlvo.getTitulo()}' ---`);
        receitaAlvo.adicionarComentario(comentario, this);
    }

    comentarCheckIn(checkInAlvo: CheckIn, comentario: string): void {
        console.log(`\n--- Ação: ${this.nome} comentou no Check-In ID: ${checkInAlvo.getIdCheckIn()} ---`);
        checkInAlvo.adicionarComentario(comentario, this);
    }

    serSeguidoPor(novoSeguidor: Usuario): void {
        console.log(`[GATILHO NO USUÁRIO ${this.nome}]: Notificando observadores...`);
        this.notificar(TipoNotificacao.NOVO_SEGUIDOR, `${novoSeguidor.getNome()} começou a seguir você.`);
    }
}
