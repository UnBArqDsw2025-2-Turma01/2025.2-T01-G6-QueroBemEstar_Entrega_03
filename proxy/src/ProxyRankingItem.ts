import { RankingItemReal } from "./RankingItemReal";
import { Usuario } from "./Usuario";
import type { IRankingItem } from "./IrankingItem";
import { Competicao } from "./Competicao";

export class ProxyRankingItem implements IRankingItem {
  private rankingReal: RankingItemReal | null = null;
  private carregado: boolean = false;

  constructor(
    public idItem: number,
    public usuarioSolicitante: Usuario,
    public competicao: Competicao
  ) {}

  private carregarRankingReal(): void {
    if (!this.carregado) {
      const pontuacaoAleatoria = Math.floor(Math.random() * 1000);
      this.rankingReal = new RankingItemReal(1, pontuacaoAleatoria, this.usuarioSolicitante);
      this.carregado = true;
    }
  }

  private usuarioEstaNaCompeticao(): boolean {
    return this.competicao.verMembros(this.usuarioSolicitante);
  }

  getPosicao(): number {
    if (!this.usuarioEstaNaCompeticao())
      throw new Error("Acesso negado: usuário não está na competição.");
    this.carregarRankingReal();
    return this.rankingReal!.getPosicao();
  }

  getPontuacao(): number {
    if (!this.usuarioEstaNaCompeticao())
      throw new Error("Acesso negado: usuário não está na competição.");
    this.carregarRankingReal();
    return this.rankingReal!.getPontuacao();
  }

  getUsuario(): Usuario {
    if (!this.usuarioEstaNaCompeticao())
      throw new Error("Acesso negado: usuário não está na competição.");
    this.carregarRankingReal();
    return this.rankingReal!.getUsuario();
  }


  atualizarRanking(novaPosicao: number, novaPontuacao: number): void {
  this.carregarRankingReal();
  if (this.rankingReal) {
    this.rankingReal.atualizarRanking(novaPosicao, novaPontuacao);
  }
}
}
