"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Director = void 0;
const CompeticaoBuilder_1 = require("./CompeticaoBuilder");
const ReceitaBuilder_1 = require("./ReceitaBuilder");
const UsuarioBuilder_1 = require("./UsuarioBuilder");
class Director {
    constructor() {
        this.builder = null;
    }
    setBuilder(builder) {
        this.builder = builder;
    }
    buildReceita() {
        if (!(this.builder instanceof ReceitaBuilder_1.ReceitaBuilder)) {
            throw new Error("Builder incorreto para construir Receita");
        }
        const builder = this.builder;
        builder.reset();
        builder
            .setTitulo("Receita Padrão (do Diretor)")
            .setIngredientes(["Ingrediente 1", "Ingrediente 2"])
            .setModoPreparo("Modo de preparo padrão.");
    }
    buildCompeticao() {
        if (!(this.builder instanceof CompeticaoBuilder_1.CompeticaoBuilder)) {
            throw new Error("Builder incorreto para construir Competição");
        }
        const builder = this.builder;
        builder.reset();
        builder
            .setNome("Competição Padrão (do Diretor)")
            .setDataInicio(new Date())
            .setDuracao(7)
            .setLimiteCheckIn(1);
    }
    buildUsuario() {
        if (!(this.builder instanceof UsuarioBuilder_1.UsuarioBuilder)) {
            throw new Error("Builder incorreto para construir Usuário");
        }
        const builder = this.builder;
        builder.reset();
        builder
            .setNomeDeUsuario("user_padrao")
            .setEmail("padrao@email.com")
            .setSenha("123456")
            .setDataCadastro(new Date());
    }
    buildTipo() {
        // placeholder to match Java design
    }
}
exports.Director = Director;
