"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comentario = void 0;
class Comentario {
    constructor(id, texto, dataPost, autor) {
        this.id = id;
        this.texto = texto;
        this.dataPost = dataPost;
        this.autor = autor;
    }
    getTexto() {
        return this.texto;
    }
    setTexto(novoTexto) {
        this.texto = novoTexto;
    }
    getDataPost() {
        return this.dataPost;
    }
    setDataPost(data) {
        this.dataPost = data;
    }
    getAutor() {
        return this.autor;
    }
    setAutor(usuario) {
        this.autor = usuario;
    }
}
exports.Comentario = Comentario;
