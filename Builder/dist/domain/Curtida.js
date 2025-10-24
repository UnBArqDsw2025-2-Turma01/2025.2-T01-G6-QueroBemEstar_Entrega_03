"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curtida = void 0;
class Curtida {
    constructor(dataHora, autor) {
        this.dataHora = dataHora;
        this.autor = autor;
    }
    getDataHora() {
        return this.dataHora;
    }
    setDataHora(dataHora) {
        this.dataHora = dataHora;
    }
    getAutor() {
        return this.autor;
    }
    setAutor(usuario) {
        this.autor = usuario;
    }
}
exports.Curtida = Curtida;
