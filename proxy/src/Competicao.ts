import { Usuario } from "./Usuario";
import { ProxyRankingItem } from "./ProxyRankingItem";




export class Competicao {
  participantes: Usuario[];
  rankings: ProxyRankingItem[];

  constructor(public id: number, public nome: string, participantes?: Usuario[]) {
    this.participantes = participantes || [];

    this.rankings = this.participantes.map((usuario, index) =>
        new ProxyRankingItem(index + 1, usuario, this) 
    );
  }

  verMembros(usuario: Usuario): boolean {
    return this.participantes.some(u => u.id === usuario.id);
  }
  calcularRanking(): ProxyRankingItem[] {

    this.rankings.sort((a, b) => b.getPontuacao() - a.getPontuacao());

    this.rankings.forEach((proxy, idx) => {
        proxy.atualizarRanking(idx + 1, proxy.getPontuacao());
    });

    return this.rankings;
  }
}