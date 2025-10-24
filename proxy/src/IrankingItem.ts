import { Usuario } from "./Usuario";


export interface IRankingItem {
  getPosicao(): number;
  getPontuacao(): number;
  getUsuario(): Usuario;
  atualizarRanking(novaPosicao: number, novaPontuacao: number): void;
}