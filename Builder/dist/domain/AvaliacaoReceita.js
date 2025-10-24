"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvaliacaoReceita = void 0;
class AvaliacaoReceita {
    constructor(id, nota, autor) {
        this.id = id;
        this.autor = autor;
        this.nota = 0;
        this.setNota(nota);
    }
    getNota() {
        return this.nota;
    }
    setNota(nota) {
        if (nota < 0 || nota > 5) {
            throw new Error("A nota deve estar entre 0 e 5.");
        }
        this.nota = nota;
    }
}
exports.AvaliacaoReceita = AvaliacaoReceita;
