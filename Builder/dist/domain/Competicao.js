"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Competicao = void 0;
const StatusCompeticao_1 = require("./StatusCompeticao");
class Competicao {
    constructor() {
        this.id = 0;
        this.nome = "";
        this.descricao = "";
        this.dataInicio = null;
        this.duracao = 0;
        this.limiteCheckIn = 0;
        this.status = StatusCompeticao_1.StatusCompeticao.ATIVO;
        this.codigoConvite = null;
        this.admin = null;
        this.participantes = [];
        this.checkIns = [];
        this.ranking = [];
        this.validacaoMinima = 0;
    }
    verMembros() {
        return [...this.participantes];
    }
    adicionarParticipante(usuario) {
        if (!this.participantes.includes(usuario)) {
            this.participantes.push(usuario);
        }
    }
    calcularRanking() {
        return [...this.ranking];
    }
    verFeedDeCheckIn() {
        return [...this.checkIns];
    }
    calcularMinCheckIn() {
        return this.validacaoMinima;
    }
    setStatus(status) {
        this.status =
            typeof status === "string"
                ? StatusCompeticao_1.StatusCompeticao[status]
                : status;
    }
}
exports.Competicao = Competicao;
