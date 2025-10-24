"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPublicReceita = exports.toPublicUsuario = exports.nextId = exports.dataStore = void 0;
exports.dataStore = {
    usuarios: new Map(),
    receitas: new Map(),
    competicoes: new Map()
};
let idSequence = 1;
const nextId = () => idSequence++;
exports.nextId = nextId;
const toPublicUsuario = (usuario) => ({
    id: usuario.id,
    nomeDeUsuario: usuario.nomeDeUsuario,
    nome: usuario.nome,
    sobrenome: usuario.sobrenome,
    email: usuario.email,
    bio: usuario.biografia,
    seguidores: usuario.seguidores.map(u => u.id ?? null).filter((id) => typeof id === "number"),
    seguindo: usuario.seguindo.map(u => u.id ?? null).filter((id) => typeof id === "number")
});
exports.toPublicUsuario = toPublicUsuario;
const toPublicReceita = (receita) => ({
    id: receita.id,
    titulo: receita.titulo,
    descricao: receita.descricao,
    autor: receita.autor ? (0, exports.toPublicUsuario)(receita.autor) : null,
    notaMedia: receita.calcularNotaMedia(),
    curtidas: receita.curtidas.length,
    comentarios: receita.comentarios.length,
    avaliacoes: receita.avaliacoes.length
});
exports.toPublicReceita = toPublicReceita;
