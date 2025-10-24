"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceitaBuilder = void 0;
class ReceitaBuilder {
    constructor(factory) {
        this.factory = factory;
        this.receita = factory();
    }
    reset() {
        this.receita = this.factory();
    }
    setTitulo(titulo) {
        this.receita.titulo = titulo;
        return this;
    }
    setDescricao(descricao) {
        this.receita.descricao = descricao;
        return this;
    }
    setIngredientes(ingredientes) {
        this.receita.ingredientes = ingredientes;
        return this;
    }
    setModoPreparo(modo) {
        this.receita.modoPreparo = modo;
        return this;
    }
    setFotoUrl(url) {
        this.receita.fotoUri = url;
        return this;
    }
    setDataPublicacao(data) {
        this.receita.dataPublicacao = data;
        return this;
    }
    setAutor(autor) {
        this.receita.autor = autor;
        return this;
    }
    setComentarios(comentarios) {
        this.receita.comentarios = comentarios;
        return this;
    }
    setCurtidas(curtidas) {
        this.receita.curtidas = curtidas;
        return this;
    }
    setAvaliacoes(avaliacoes) {
        this.receita.avaliacoes = avaliacoes;
        return this;
    }
    getResult() {
        const result = this.receita;
        this.reset();
        return result;
    }
}
exports.ReceitaBuilder = ReceitaBuilder;
