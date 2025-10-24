"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioBuilder = void 0;
class UsuarioBuilder {
    constructor(factory) {
        this.factory = factory;
        this.usuario = factory();
    }
    reset() {
        this.usuario = this.factory();
    }
    setNomeDeUsuario(nome) {
        this.usuario.nomeDeUsuario = nome;
        return this;
    }
    setNome(nome) {
        this.usuario.nome = nome;
        return this;
    }
    setSobrenome(sobrenome) {
        this.usuario.sobrenome = sobrenome;
        return this;
    }
    setEmail(email) {
        this.usuario.email = email;
        return this;
    }
    setSenha(senha) {
        this.usuario.senha = senha;
        return this;
    }
    setFotoPerfil(url) {
        this.usuario.fotoPerfilUrl = url;
        return this;
    }
    setBiografia(bio) {
        this.usuario.biografia = bio;
        return this;
    }
    setDataCadastro(data) {
        this.usuario.dataCadastro = data;
        return this;
    }
    setGoogleId(id) {
        this.usuario.googleId = id;
        return this;
    }
    setEmailConfirmado(confirmado) {
        this.usuario.emailConfirmado = confirmado;
        return this;
    }
    setSeguidores(seguidores) {
        this.usuario.seguidores = seguidores;
        return this;
    }
    setSeguindo(seguindo) {
        this.usuario.seguindo = seguindo;
        return this;
    }
    setReceitasSalvas(receitas) {
        this.usuario.receitasSalvas = receitas;
        return this;
    }
    setReceitasPostadas(receitas) {
        this.usuario.receitasPostadas = receitas;
        return this;
    }
    getResult() {
        const result = this.usuario;
        this.reset();
        return result;
    }
}
exports.UsuarioBuilder = UsuarioBuilder;
