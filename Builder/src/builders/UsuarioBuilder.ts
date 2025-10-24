import type { Receita } from "../domain/Receita";
import type { Usuario } from "../domain/Usuario";
import { Builder } from "./Builder";

export class UsuarioBuilder implements Builder<Usuario> {
  private usuario: Usuario;

  constructor(private factory: () => Usuario) {
    this.usuario = factory();
  }

  reset(): void {
    this.usuario = this.factory();
  }

  setNomeDeUsuario(nome: string): this {
    this.usuario.nomeDeUsuario = nome;
    return this;
  }

  setNome(nome: string): this {
    this.usuario.nome = nome;
    return this;
  }

  setSobrenome(sobrenome: string): this {
    this.usuario.sobrenome = sobrenome;
    return this;
  }

  setEmail(email: string): this {
    this.usuario.email = email;
    return this;
  }

  setSenha(senha: string): this {
    this.usuario.senha = senha;
    return this;
  }

  setFotoPerfil(url: string): this {
    this.usuario.fotoPerfilUrl = url;
    return this;
  }

  setBiografia(bio: string): this {
    this.usuario.biografia = bio;
    return this;
  }

  setDataCadastro(data: Date): this {
    this.usuario.dataCadastro = data;
    return this;
  }

  setGoogleId(id: string): this {
    this.usuario.googleId = id;
    return this;
  }

  setEmailConfirmado(confirmado: boolean): this {
    this.usuario.emailConfirmado = confirmado;
    return this;
  }

  setSeguidores(seguidores: Usuario[]): this {
    this.usuario.seguidores = seguidores;
    return this;
  }

  setSeguindo(seguindo: Usuario[]): this {
    this.usuario.seguindo = seguindo;
    return this;
  }

  setReceitasSalvas(receitas: Receita[]): this {
    this.usuario.receitasSalvas = receitas;
    return this;
  }

  setReceitasPostadas(receitas: Receita[]): this {
    this.usuario.receitasPostadas = receitas;
    return this;
  }

  getResult(): Usuario {
    const result = this.usuario;
    this.reset();
    return result;
  }
}
