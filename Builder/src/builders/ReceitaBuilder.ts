import type { AvaliacaoReceita } from "../domain/AvaliacaoReceita";
import type { Comentario } from "../domain/Comentario";
import type { Curtida } from "../domain/Curtida";
import type { Receita } from "../domain/Receita";
import type { Usuario } from "../domain/Usuario";
import { Builder } from "./Builder";

export class ReceitaBuilder implements Builder<Receita> {
  private receita: Receita;

  constructor(private factory: () => Receita) {
    this.receita = factory();
  }

  reset(): void {
    this.receita = this.factory();
  }

  setTitulo(titulo: string): this {
    this.receita.titulo = titulo;
    return this;
  }

  setDescricao(descricao: string): this {
    this.receita.descricao = descricao;
    return this;
  }

  setIngredientes(ingredientes: string[]): this {
    this.receita.ingredientes = ingredientes;
    return this;
  }

  setModoPreparo(modo: string): this {
    this.receita.modoPreparo = modo;
    return this;
  }

  setFotoUrl(url: string): this {
    this.receita.fotoUri = url;
    return this;
  }

  setDataPublicacao(data: Date): this {
    this.receita.dataPublicacao = data;
    return this;
  }

  setAutor(autor: Usuario): this {
    this.receita.autor = autor;
    return this;
  }

  setComentarios(comentarios: Comentario[]): this {
    this.receita.comentarios = comentarios;
    return this;
  }

  setCurtidas(curtidas: Curtida[]): this {
    this.receita.curtidas = curtidas;
    return this;
  }

  setAvaliacoes(avaliacoes: AvaliacaoReceita[]): this {
    this.receita.avaliacoes = avaliacoes;
    return this;
  }

  getResult(): Receita {
    const result = this.receita;
    this.reset();
    return result;
  }
}
