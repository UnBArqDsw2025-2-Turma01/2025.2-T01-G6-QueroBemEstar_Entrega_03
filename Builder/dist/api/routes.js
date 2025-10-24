"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const domain_1 = require("../domain");
const dataStore_1 = require("./dataStore");
exports.router = (0, express_1.Router)();
exports.router.get("/usuarios", (_req, res) => {
    const usuarios = Array.from(dataStore_1.dataStore.usuarios.values()).map(dataStore_1.toPublicUsuario);
    res.json(usuarios);
});
exports.router.post("/usuarios", (req, res) => {
    const { nomeDeUsuario, nome, sobrenome, email, senha } = req.body;
    if (!nomeDeUsuario || !email || !senha) {
        return res.status(400).json({ message: "nomeDeUsuario, email e senha são obrigatórios" });
    }
    const usuario = new domain_1.Usuario();
    usuario.id = (0, dataStore_1.nextId)();
    usuario.cadastrar(nomeDeUsuario, email, senha);
    usuario.nome = nome ?? "";
    usuario.sobrenome = sobrenome ?? "";
    dataStore_1.dataStore.usuarios.set(usuario.id, usuario);
    res.status(201).json((0, dataStore_1.toPublicUsuario)(usuario));
});
exports.router.get("/receitas", (_req, res) => {
    const receitas = Array.from(dataStore_1.dataStore.receitas.values()).map(dataStore_1.toPublicReceita);
    res.json(receitas);
});
exports.router.post("/receitas", (req, res) => {
    const { titulo, descricao, ingredientes, modoPreparo, autorId } = req.body;
    if (!titulo || !autorId) {
        return res.status(400).json({ message: "titulo e autorId são obrigatórios" });
    }
    const autor = dataStore_1.dataStore.usuarios.get(Number(autorId));
    if (!autor) {
        return res.status(404).json({ message: "Autor não encontrado" });
    }
    const receita = new domain_1.Receita();
    receita.id = (0, dataStore_1.nextId)();
    receita.titulo = titulo;
    receita.descricao = descricao ?? null;
    receita.ingredientes = Array.isArray(ingredientes) ? ingredientes : [];
    receita.modoPreparo = modoPreparo ?? null;
    receita.autor = autor;
    dataStore_1.dataStore.receitas.set(receita.id, receita);
    autor.publicarReceita(receita);
    res.status(201).json((0, dataStore_1.toPublicReceita)(receita));
});
exports.router.post("/receitas/:id/avaliacoes", (req, res) => {
    const receita = dataStore_1.dataStore.receitas.get(Number(req.params.id));
    if (!receita) {
        return res.status(404).json({ message: "Receita não encontrada" });
    }
    const { autorId, nota } = req.body;
    const autor = dataStore_1.dataStore.usuarios.get(Number(autorId));
    if (!autor) {
        return res.status(404).json({ message: "Autor não encontrado" });
    }
    const avaliacao = new domain_1.AvaliacaoReceita((0, dataStore_1.nextId)(), Number(nota ?? 0), autor);
    receita.avaliacoes.push(avaliacao);
    res.status(201).json({ notaMedia: receita.calcularNotaMedia() });
});
exports.router.get("/competicoes", (_req, res) => {
    const competicoes = Array.from(dataStore_1.dataStore.competicoes.values()).map(competicao => ({
        id: competicao.id,
        nome: competicao.nome,
        status: competicao.status,
        participantes: competicao.participantes.map(p => p.id)
    }));
    res.json(competicoes);
});
exports.router.post("/competicoes", (req, res) => {
    const { nome, descricao, adminId } = req.body;
    if (!nome) {
        return res.status(400).json({ message: "nome é obrigatório" });
    }
    const competicao = new domain_1.Competicao();
    competicao.id = (0, dataStore_1.nextId)();
    competicao.nome = nome;
    competicao.descricao = descricao ?? "";
    competicao.status = domain_1.StatusCompeticao.ATIVO;
    if (adminId) {
        const adminUser = dataStore_1.dataStore.usuarios.get(Number(adminId));
        if (adminUser) {
            competicao.admin = new domain_1.AdministradorCompeticao();
        }
    }
    dataStore_1.dataStore.competicoes.set(competicao.id, competicao);
    res.status(201).json({
        id: competicao.id,
        nome: competicao.nome,
        status: competicao.status
    });
});
exports.router.post("/competicoes/:id/participantes", (req, res) => {
    const competicao = dataStore_1.dataStore.competicoes.get(Number(req.params.id));
    if (!competicao) {
        return res.status(404).json({ message: "Competição não encontrada" });
    }
    const { usuarioId } = req.body;
    const usuario = dataStore_1.dataStore.usuarios.get(Number(usuarioId));
    if (!usuario) {
        return res.status(404).json({ message: "Usuário não encontrado" });
    }
    competicao.adicionarParticipante(usuario);
    res.json({
        id: competicao.id,
        nome: competicao.nome,
        participantes: competicao.participantes.map(p => p.id)
    });
});
