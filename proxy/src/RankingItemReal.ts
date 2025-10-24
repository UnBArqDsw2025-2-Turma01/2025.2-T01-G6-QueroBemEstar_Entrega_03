import { Usuario } from "./Usuario";
import type { IRankingItem } from "./IrankingItem";

export class RankingItemReal implements IRankingItem {
  constructor(
    public posicao: number,
    public pontuacao: number,
    public usuario: Usuario
  ) {}

  getPosicao(): number {
    return this.posicao;
  }
  getPontuacao(): number {
    return this.pontuacao;
  }
  getUsuario(): Usuario {
    return this.usuario;
  }
  atualizarRanking(novaPosicao: number, novaPontuacao: number): void {
    this.posicao = novaPosicao;
    this.pontuacao = novaPontuacao;
  }
}
