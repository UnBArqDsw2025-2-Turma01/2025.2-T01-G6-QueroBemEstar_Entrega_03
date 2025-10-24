"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministradorCompeticao = void 0;
const CodigoCompeticao_1 = require("./CodigoCompeticao");
const StatusCompeticao_1 = require("./StatusCompeticao");
class AdministradorCompeticao {
    editarCompeticao(_competicao) {
        // Placeholder for domain logic
    }
    gerarCodigoCompeticao(competicao) {
        const randomCode = Math.random().toString(36).slice(2, 10).toUpperCase();
        const dias = 7;
        const codigo = new CodigoCompeticao_1.CodigoCompeticao(Date.now(), randomCode, dias, competicao);
        competicao.codigoConvite = codigo;
        return codigo;
    }
    finalizarCompeticao(competicao) {
        competicao.setStatus(StatusCompeticao_1.StatusCompeticao.FINALIZADO);
    }
    inativarCompeticao(_competicao) {
        // Placeholder for domain logic
    }
    realizarSorteioCompeticao(_usuario, _competicao) {
        // Placeholder for domain logic
    }
}
exports.AdministradorCompeticao = AdministradorCompeticao;
