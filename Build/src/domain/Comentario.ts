import type { Usuario } from "./Usuario";

export class Comentario {
  constructor(
    public readonly id: number,
    private texto: string,
    private dataPost: Date,
    private autor: Usuario
  ) {}

  getTexto(): string {
    return this.texto;
  }

  setTexto(novoTexto: string): void {
    this.texto = novoTexto;
  }

  getDataPost(): Date {
    return this.dataPost;
  }

  setDataPost(data: Date): void {
    this.dataPost = data;
  }

  getAutor(): Usuario {
    return this.autor;
  }

  setAutor(usuario: Usuario): void {
    this.autor = usuario;
  }
}
