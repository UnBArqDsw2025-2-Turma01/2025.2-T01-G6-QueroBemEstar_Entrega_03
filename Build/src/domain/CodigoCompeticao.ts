import type { Competicao } from "./Competicao";

export class CodigoCompeticao {
  constructor(
    private id: number,
    private cdCodigo: string,
    private duracao: number,
    private competicao: Competicao
  ) {}

  getId(): number {
    return this.id;
  }

  getCdCodigo(): string {
    return this.cdCodigo;
  }

  setCdCodigo(cdCodigo: string): void {
    this.cdCodigo = cdCodigo;
  }

  getDuracao(): number {
    return this.duracao;
  }

  setDuracao(duracao: number): void {
    this.duracao = duracao;
  }

  getCompeticao(): Competicao {
    return this.competicao;
  }
}
