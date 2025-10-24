import type { Usuario } from "./Usuario";

export class AvaliacaoReceita {
  private nota = 0;

  constructor(
    public readonly id: number,
    nota: number,
    public autor: Usuario
  ) {
    this.setNota(nota);
  }

  getNota(): number {
    return this.nota;
  }

  setNota(nota: number): void {
    if (nota < 0 || nota > 5) {
      throw new Error("A nota deve estar entre 0 e 5.");
    }
    this.nota = nota;
  }
}
