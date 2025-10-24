import { Usuario } from "./concrete/Usuario";
import { Receita } from "./concrete/Receita";
import { CheckIn } from "./concrete/CheckIn";
import { Ranking } from "./concrete/Ranking";

function main(): void {
    const autorReceita = new Usuario("ChefAna");
    const leitor = new Usuario("LeitorBob");

    const receitaDeBolo = new Receita("Bolo de Chocolate");
    const checkin101 = new CheckIn(101);
    const rankingCompeticao = new Ranking(1);

    receitaDeBolo.adicionarObservador(autorReceita);
    checkin101.adicionarObservador(autorReceita);
    rankingCompeticao.adicionarObservador(autorReceita);
    autorReceita.adicionarObservador(autorReceita);

    console.log("--- Fluxo de Notificação Iniciado ---");

    leitor.comentar(receitaDeBolo, "Que delícia!");
    leitor.seguir(autorReceita);
    leitor.curtir(receitaDeBolo);
    leitor.comentarCheckIn(checkin101, "Ótimo lugar!");
    rankingCompeticao.atualizarRanking();
}

main();
