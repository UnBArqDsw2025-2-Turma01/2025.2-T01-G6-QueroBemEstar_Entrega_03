import type { CheckInCompeticao } from "./CheckInCompeticao";
import type { Usuario } from "./Usuario";

export class ValidacaoCheckIn {
  constructor(
    private id: number,
    private status: boolean,
    private dataHora: Date,
    private validador: Usuario,
    private checkIn: CheckInCompeticao
  ) {}

  getId(): number {
    return this.id;
  }

  isStatus(): boolean {
    return this.status;
  }

  setStatus(status: boolean): void {
    this.status = status;
  }

  getDataHora(): Date {
    return this.dataHora;
  }

  setDataHora(dataHora: Date): void {
    this.dataHora = dataHora;
  }

  getValidador(): Usuario {
    return this.validador;
  }

  setValidador(validador: Usuario): void {
    this.validador = validador;
  }

  getCheckIn(): CheckInCompeticao {
    return this.checkIn;
  }

  setCheckIn(checkIn: CheckInCompeticao): void {
    this.checkIn = checkIn;
  }
}
