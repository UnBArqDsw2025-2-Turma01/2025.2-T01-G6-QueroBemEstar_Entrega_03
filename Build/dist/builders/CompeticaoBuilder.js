"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompeticaoBuilder = void 0;
class CompeticaoBuilder {
    constructor(factory) {
        this.factory = factory;
        this.competicao = factory();
    }
    reset() {
        this.competicao = this.factory();
    }
    setNome(nome) {
        this.competicao.nome = nome;
        return this;
    }
    setDescricao(descricao) {
        this.competicao.descricao = descricao;
        return this;
    }
    setDataInicio(data) {
        this.competicao.dataInicio = data;
        return this;
    }
    setDuracao(dias) {
        this.competicao.duracao = dias;
        return this;
    }
    setLimiteCheckIn(limite) {
        this.competicao.limiteCheckIn = limite;
        return this;
    }
    setStatus(status) {
        this.competicao.status = status;
        return this;
    }
    setCodigoConvite(codigo) {
        this.competicao.codigoConvite = codigo;
        return this;
    }
    setAdmin(admin) {
        this.competicao.admin = admin;
        return this;
    }
    setParticipantes(participantes) {
        this.competicao.participantes = participantes;
        return this;
    }
    setValidacaoMinima(minimo) {
        this.competicao.validacaoMinima = minimo;
        return this;
    }
    getResult() {
        const result = this.competicao;
        this.reset();
        return result;
    }
}
exports.CompeticaoBuilder = CompeticaoBuilder;
