"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodigoCompeticao = void 0;
class CodigoCompeticao {
    constructor(id, cdCodigo, duracao, competicao) {
        this.id = id;
        this.cdCodigo = cdCodigo;
        this.duracao = duracao;
        this.competicao = competicao;
    }
    getId() {
        return this.id;
    }
    getCdCodigo() {
        return this.cdCodigo;
    }
    setCdCodigo(cdCodigo) {
        this.cdCodigo = cdCodigo;
    }
    getDuracao() {
        return this.duracao;
    }
    setDuracao(duracao) {
        this.duracao = duracao;
    }
    getCompeticao() {
        return this.competicao;
    }
}
exports.CodigoCompeticao = CodigoCompeticao;
