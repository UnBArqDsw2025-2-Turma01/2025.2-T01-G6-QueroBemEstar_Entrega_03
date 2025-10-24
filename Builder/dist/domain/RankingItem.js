"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankingItem = void 0;
class RankingItem {
    constructor(posicao, pontuacao, usuario) {
        this.posicao = posicao;
        this.pontuacao = pontuacao;
        this.usuario = usuario;
    }
    getPosicao() {
        return this.posicao;
    }
    setPosicao(posicao) {
        this.posicao = posicao;
    }
    getPontuacao() {
        return this.pontuacao;
    }
    setPontuacao(pontuacao) {
        this.pontuacao = pontuacao;
    }
    getUsuario() {
        return this.usuario;
    }
}
exports.RankingItem = RankingItem;
