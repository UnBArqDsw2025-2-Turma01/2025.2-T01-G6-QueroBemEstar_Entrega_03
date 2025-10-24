"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecuperacaoSenhaToken = void 0;
class RecuperacaoSenhaToken {
    constructor(token, dataExpiracao, usuario) {
        this.token = token;
        this.dataExpiracao = dataExpiracao;
        this.usuario = usuario;
    }
    getToken() {
        return this.token;
    }
    setToken(token) {
        this.token = token;
    }
    getDataExpiracao() {
        return this.dataExpiracao;
    }
    setDataExpiracao(data) {
        this.dataExpiracao = data;
    }
    getUsuario() {
        return this.usuario;
    }
    setUsuario(usuario) {
        this.usuario = usuario;
    }
    isExpirado(reference = new Date()) {
        return reference.getTime() > this.dataExpiracao.getTime();
    }
}
exports.RecuperacaoSenhaToken = RecuperacaoSenhaToken;
