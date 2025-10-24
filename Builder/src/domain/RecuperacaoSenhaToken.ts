import type { Usuario } from "./Usuario";

export class RecuperacaoSenhaToken {
  constructor(
    private token: string,
    private dataExpiracao: Date,
    private usuario: Usuario
  ) {}

  getToken(): string {
    return this.token;
  }

  setToken(token: string): void {
    this.token = token;
  }

  getDataExpiracao(): Date {
    return this.dataExpiracao;
  }

  setDataExpiracao(data: Date): void {
    this.dataExpiracao = data;
  }

  getUsuario(): Usuario {
    return this.usuario;
  }

  setUsuario(usuario: Usuario): void {
    this.usuario = usuario;
  }

  isExpirado(reference: Date = new Date()): boolean {
    return reference.getTime() > this.dataExpiracao.getTime();
  }
}
