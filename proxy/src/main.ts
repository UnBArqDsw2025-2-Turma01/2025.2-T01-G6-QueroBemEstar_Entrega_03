import { Usuario } from "./Usuario.js";
import { Competicao } from "./Competicao.js";
import { ProxyRankingItem } from "./ProxyRankingItem.js";

function main() {

  const usuario1 = new Usuario(1, "José");
  const usuario2 = new Usuario(2, "Ana");
  const usuario3 = new Usuario(3, "Carlos");

  const competicao = new Competicao(1, "Copa de Receitas", [usuario1, usuario2, usuario3]);

  const ranking = competicao.calcularRanking();


  console.log("Ranking da competição:");
  ranking.forEach(item => {
    console.log(
      `Usuário: ${item.getUsuario().nome} | Pontuação: ${item.getPontuacao()} | Posição: ${item.getPosicao()}`
    );
  });


  const usuarioFora = new Usuario(4, "Visitante");
  const proxyFora = new ProxyRankingItem(4, usuarioFora, competicao);
  try {
    console.log(proxyFora.getPontuacao());
  } catch (e) {
    console.log("Acesso negado para usuário não participante:", (e as Error).message);
  }
}

main();
