import type { Usuario } from "./Usuario";

export class Curtida {
  constructor(
    private dataHora: Date,
    private autor: Usuario
  ) {}

  getDataHora(): Date {
    return this.dataHora;
  }

  setDataHora(dataHora: Date): void {
    this.dataHora = dataHora;
  }

  getAutor(): Usuario {
    return this.autor;
  }

  setAutor(usuario: Usuario): void {
    this.autor = usuario;
  }
}
