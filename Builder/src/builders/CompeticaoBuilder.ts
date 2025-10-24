import type { AdministradorCompeticao } from "../domain/AdministradorCompeticao";
import type { CodigoCompeticao } from "../domain/CodigoCompeticao";
import type { Competicao } from "../domain/Competicao";
import type { Usuario } from "../domain/Usuario";
import type { StatusCompeticao } from "../domain/StatusCompeticao";
import { Builder } from "./Builder";

export class CompeticaoBuilder implements Builder<Competicao> {
  private competicao: Competicao;

  constructor(private factory: () => Competicao) {
    this.competicao = factory();
  }

  reset(): void {
    this.competicao = this.factory();
  }

  setNome(nome: string): this {
    this.competicao.nome = nome;
    return this;
  }

  setDescricao(descricao: string): this {
    this.competicao.descricao = descricao;
    return this;
  }

  setDataInicio(data: Date): this {
    this.competicao.dataInicio = data;
    return this;
  }

  setDuracao(dias: number): this {
    this.competicao.duracao = dias;
    return this;
  }

  setLimiteCheckIn(limite: number): this {
    this.competicao.limiteCheckIn = limite;
    return this;
  }

  setStatus(status: StatusCompeticao): this {
    this.competicao.status = status;
    return this;
  }

  setCodigoConvite(codigo: CodigoCompeticao): this {
    this.competicao.codigoConvite = codigo;
    return this;
  }

  setAdmin(admin: AdministradorCompeticao): this {
    this.competicao.admin = admin;
    return this;
  }

  setParticipantes(participantes: Usuario[]): this {
    this.competicao.participantes = participantes;
    return this;
  }

  setValidacaoMinima(minimo: number): this {
    this.competicao.validacaoMinima = minimo;
    return this;
  }

  getResult(): Competicao {
    const result = this.competicao;
    this.reset();
    return result;
  }
}
