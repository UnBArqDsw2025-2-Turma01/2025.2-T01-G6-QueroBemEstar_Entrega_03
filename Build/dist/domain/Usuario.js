"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const RecuperacaoSenhaToken_1 = require("./RecuperacaoSenhaToken");
class Usuario {
    constructor() {
        this.id = 0;
        this.seguidores = [];
        this.seguindo = [];
        this.receitasSalvas = [];
        this.receitasPostadas = [];
        this.nomeDeUsuario = "";
        this.nome = "";
        this.sobrenome = "";
        this.email = "";
        this.senha = "";
        this.fotoPerfilUrl = null;
        this.biografia = null;
        this.dataCadastro = new Date();
        this.googleId = null;
        this.emailConfirmado = false;
    }
    cadastrar(nomeDeUsuario, email, senha) {
        this.nomeDeUsuario = nomeDeUsuario;
        this.email = email;
        this.senha = senha;
        this.dataCadastro = new Date();
    }
    login(email, senha) {
        return this.email === email && this.senha === senha;
    }
    loginComGoogle(googleToken) {
        this.googleId = googleToken;
        return true;
    }
    logout() {
        // placeholder
    }
    solicitarRecuperacaoSenha() {
        const expiracao = new Date(Date.now() + 1000 * 60 * 60);
        return new RecuperacaoSenhaToken_1.RecuperacaoSenhaToken(Math.random().toString(36), expiracao, this);
    }
    confirmarEmail(_token) {
        this.emailConfirmado = true;
        return true;
    }
    editarPerfil() {
        // placeholder
    }
    seguirUsuario(usuarioAlvo) {
        if (!this.seguindo.includes(usuarioAlvo)) {
            this.seguindo.push(usuarioAlvo);
            usuarioAlvo.seguidores.push(this);
        }
    }
    deixarDeSeguirUsuario(usuarioAlvo) {
        this.seguindo = this.seguindo.filter(u => u !== usuarioAlvo);
        usuarioAlvo.seguidores = usuarioAlvo.seguidores.filter(u => u !== this);
    }
    visualizarListaSeguindo() {
        return [...this.seguindo];
    }
    visualizarListaSeguidores() {
        return [...this.seguidores];
    }
    verFeedReceitas() {
        return [...this.receitasPostadas];
    }
    publicarReceita(receitaAlvo) {
        if (!this.receitasPostadas.includes(receitaAlvo)) {
            this.receitasPostadas.push(receitaAlvo);
        }
    }
    publicarrReceita(receitaAlvo) {
        this.publicarReceita(receitaAlvo);
    }
    curtirReceita(receita, curtida) {
        if (!receita.curtidas.includes(curtida)) {
            receita.curtidas.push(curtida);
        }
    }
    comentarReceita(_receita, _texto) {
        return null;
    }
    salvarReceita(receita) {
        if (!this.receitasSalvas.includes(receita)) {
            this.receitasSalvas.push(receita);
        }
    }
    criarCompeticao(_competicaoAlvo) {
        // placeholder
    }
    entrarCompeticao(_competicaoAlvo, _codigo) {
        return true;
    }
    sairDaCompeticao(_competicao) {
        // placeholder
    }
    validarCheckIn(_validacao) {
        // placeholder
    }
    postarCheckIn(_checkInAlvo) {
        // placeholder
    }
    getNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`.trim();
    }
}
exports.Usuario = Usuario;
