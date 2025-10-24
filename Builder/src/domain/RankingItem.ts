import type { Usuario } from "./Usuario";

export class RankingItem {
  constructor(
    private posicao: number,
    private pontuacao: number,
    private usuario: Usuario
  ) {}

  getPosicao(): number {
    return this.posicao;
  }

  setPosicao(posicao: number): void {
    this.posicao = posicao;
  }

  getPontuacao(): number {
    return this.pontuacao;
  }

  setPontuacao(pontuacao: number): void {
    this.pontuacao = pontuacao;
  }

  getUsuario(): Usuario {
    return this.usuario;
  }
}
