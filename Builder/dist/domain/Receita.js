"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Receita = void 0;
class Receita {
    constructor() {
        this.id = null;
        this.titulo = null;
        this.descricao = null;
        this.ingredientes = [];
        this.modoPreparo = null;
        this.fotoUri = null;
        this.dataPublicacao = null;
        this.autor = null;
        this.comentarios = [];
        this.curtidas = [];
        this.avaliacoes = [];
    }
    calcularNotaMedia() {
        if (!this.avaliacoes.length) {
            return 0;
        }
        const soma = this.avaliacoes
            .map(avaliacao => avaliacao.getNota())
            .reduce((acc, nota) => acc + nota, 0);
        return soma / this.avaliacoes.length;
    }
    toString() {
        const autorNome = this.autor ? this.autor.getNomeCompleto?.() ?? "N/A" : "N/A";
        return `Receita [titulo=${this.titulo ?? ""}, autor=${autorNome}]`;
    }
}
exports.Receita = Receita;
