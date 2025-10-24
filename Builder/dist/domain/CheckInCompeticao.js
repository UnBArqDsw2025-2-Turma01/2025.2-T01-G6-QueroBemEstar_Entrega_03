"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckInCompeticao = void 0;
const StatusValidacao_1 = require("./StatusValidacao");
class CheckInCompeticao {
    constructor(id, fotoUrl, legenda, tipo, dataPost = new Date(), status = StatusValidacao_1.StatusValidacao.PENDENTE) {
        this.id = id;
        this.fotoUrl = fotoUrl;
        this.legenda = legenda;
        this.tipo = tipo;
        this.dataPost = dataPost;
        this.status = status;
        this.comentarios = [];
        this.curtidas = [];
        this.validacoes = [];
    }
    adicionarValidacao(validacao) {
        this.validacoes.push(validacao);
    }
    editarCheckIn(novaLegenda, novaFotoUrl) {
        if (novaLegenda)
            this.legenda = novaLegenda;
        if (novaFotoUrl)
            this.fotoUrl = novaFotoUrl;
    }
    excluirCheckIn() {
        this.comentarios = [];
        this.curtidas = [];
        this.validacoes = [];
    }
    verificarStatusValidacao() {
        return this.status;
    }
    adicionarComentario(comentario) {
        this.comentarios.push(comentario);
    }
    curtirCheckIn(curtida) {
        this.curtidas.push(curtida);
    }
    removerComentario(comentario) {
        this.comentarios = this.comentarios.filter(c => c !== comentario);
    }
    getId() {
        return this.id;
    }
    getFotoUrl() {
        return this.fotoUrl;
    }
    setFotoUrl(fotoUrl) {
        this.fotoUrl = fotoUrl;
    }
    getLegenda() {
        return this.legenda;
    }
    setLegenda(legenda) {
        this.legenda = legenda;
    }
    getDataPost() {
        return this.dataPost;
    }
    setDataPost(dataPost) {
        this.dataPost = dataPost;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    getComentarios() {
        return [...this.comentarios];
    }
    getCurtidas() {
        return [...this.curtidas];
    }
    getValidacoes() {
        return [...this.validacoes];
    }
}
exports.CheckInCompeticao = CheckInCompeticao;
