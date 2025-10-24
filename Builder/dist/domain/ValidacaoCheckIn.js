"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidacaoCheckIn = void 0;
class ValidacaoCheckIn {
    constructor(id, status, dataHora, validador, checkIn) {
        this.id = id;
        this.status = status;
        this.dataHora = dataHora;
        this.validador = validador;
        this.checkIn = checkIn;
    }
    getId() {
        return this.id;
    }
    isStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    getDataHora() {
        return this.dataHora;
    }
    setDataHora(dataHora) {
        this.dataHora = dataHora;
    }
    getValidador() {
        return this.validador;
    }
    setValidador(validador) {
        this.validador = validador;
    }
    getCheckIn() {
        return this.checkIn;
    }
    setCheckIn(checkIn) {
        this.checkIn = checkIn;
    }
}
exports.ValidacaoCheckIn = ValidacaoCheckIn;
