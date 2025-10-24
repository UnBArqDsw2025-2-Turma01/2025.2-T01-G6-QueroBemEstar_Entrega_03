import { StatusValidacao } from "./StatusValidacao";
import type { Comentario } from "./Comentario";
import type { Curtida } from "./Curtida";
import type { ValidacaoCheckIn } from "./ValidacaoCheckIn";

export class CheckInCompeticao {
  private comentarios: Comentario[] = [];
  private curtidas: Curtida[] = [];
  private validacoes: ValidacaoCheckIn[] = [];

  constructor(
    private id: number,
    private fotoUrl: string,
    private legenda: string,
    private tipo: string,
    private dataPost: Date = new Date(),
    private status: StatusValidacao = StatusValidacao.PENDENTE
  ) {}

  adicionarValidacao(validacao: ValidacaoCheckIn): void {
    this.validacoes.push(validacao);
  }

  editarCheckIn(novaLegenda?: string, novaFotoUrl?: string): void {
    if (novaLegenda) this.legenda = novaLegenda;
    if (novaFotoUrl) this.fotoUrl = novaFotoUrl;
  }

  excluirCheckIn(): void {
    this.comentarios = [];
    this.curtidas = [];
    this.validacoes = [];
  }

  verificarStatusValidacao(): StatusValidacao {
    return this.status;
  }

  adicionarComentario(comentario: Comentario): void {
    this.comentarios.push(comentario);
  }

  curtirCheckIn(curtida: Curtida): void {
    this.curtidas.push(curtida);
  }

  removerComentario(comentario: Comentario): void {
    this.comentarios = this.comentarios.filter(c => c !== comentario);
  }

  getId(): number {
    return this.id;
  }

  getFotoUrl(): string {
    return this.fotoUrl;
  }

  setFotoUrl(fotoUrl: string): void {
    this.fotoUrl = fotoUrl;
  }

  getLegenda(): string {
    return this.legenda;
  }

  setLegenda(legenda: string): void {
    this.legenda = legenda;
  }

  getDataPost(): Date {
    return this.dataPost;
  }

  setDataPost(dataPost: Date): void {
    this.dataPost = dataPost;
  }

  getStatus(): StatusValidacao {
    return this.status;
  }

  setStatus(status: StatusValidacao): void {
    this.status = status;
  }

  getTipo(): string {
    return this.tipo;
  }

  setTipo(tipo: string): void {
    this.tipo = tipo;
  }

  getComentarios(): Comentario[] {
    return [...this.comentarios];
  }

  getCurtidas(): Curtida[] {
    return [...this.curtidas];
  }

  getValidacoes(): ValidacaoCheckIn[] {
    return [...this.validacoes];
  }
}
