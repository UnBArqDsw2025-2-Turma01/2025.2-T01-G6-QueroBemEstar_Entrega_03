import { Request, Response, Router } from "express";
import {
  AdministradorCompeticao,
  AvaliacaoReceita,
  Competicao,
  Receita,
  StatusCompeticao,
  Usuario
} from "../domain";
import { dataStore, nextId, toPublicReceita, toPublicUsuario } from "./dataStore";

export const router = Router();

router.get("/usuarios", (_req: Request, res: Response) => {
  const usuarios = Array.from(dataStore.usuarios.values()).map(toPublicUsuario);
  res.json(usuarios);
});

router.post("/usuarios", (req: Request, res: Response) => {
  const { nomeDeUsuario, nome, sobrenome, email, senha } = req.body;
  if (!nomeDeUsuario || !email || !senha) {
    return res.status(400).json({ message: "nomeDeUsuario, email e senha são obrigatórios" });
  }
  const usuario = new Usuario();
  usuario.id = nextId();
  usuario.cadastrar(nomeDeUsuario, email, senha);
  usuario.nome = nome ?? "";
  usuario.sobrenome = sobrenome ?? "";
  dataStore.usuarios.set(usuario.id, usuario);
  res.status(201).json(toPublicUsuario(usuario));
});

router.get("/receitas", (_req: Request, res: Response) => {
  const receitas = Array.from(dataStore.receitas.values()).map(toPublicReceita);
  res.json(receitas);
});

router.post("/receitas", (req: Request, res: Response) => {
  const { titulo, descricao, ingredientes, modoPreparo, autorId } = req.body;
  if (!titulo || !autorId) {
    return res.status(400).json({ message: "titulo e autorId são obrigatórios" });
  }
  const autor = dataStore.usuarios.get(Number(autorId));
  if (!autor) {
    return res.status(404).json({ message: "Autor não encontrado" });
  }
  const receita = new Receita();
  receita.id = nextId();
  receita.titulo = titulo;
  receita.descricao = descricao ?? null;
  receita.ingredientes = Array.isArray(ingredientes) ? ingredientes : [];
  receita.modoPreparo = modoPreparo ?? null;
  receita.autor = autor;
  dataStore.receitas.set(receita.id, receita);
  autor.publicarReceita(receita);
  res.status(201).json(toPublicReceita(receita));
});

router.post("/receitas/:id/avaliacoes", (req: Request, res: Response) => {
  const receita = dataStore.receitas.get(Number(req.params.id));
  if (!receita) {
    return res.status(404).json({ message: "Receita não encontrada" });
  }
  const { autorId, nota } = req.body;
  const autor = dataStore.usuarios.get(Number(autorId));
  if (!autor) {
    return res.status(404).json({ message: "Autor não encontrado" });
  }
  const avaliacao = new AvaliacaoReceita(nextId(), Number(nota ?? 0), autor);
  receita.avaliacoes.push(avaliacao);
  res.status(201).json({ notaMedia: receita.calcularNotaMedia() });
});

router.get("/competicoes", (_req: Request, res: Response) => {
  const competicoes = Array.from(dataStore.competicoes.values()).map(competicao => ({
    id: competicao.id,
    nome: competicao.nome,
    status: competicao.status,
    participantes: competicao.participantes.map(p => p.id)
  }));
  res.json(competicoes);
});

router.post("/competicoes", (req: Request, res: Response) => {
  const { nome, descricao, adminId } = req.body;
  if (!nome) {
    return res.status(400).json({ message: "nome é obrigatório" });
  }
  const competicao = new Competicao();
  competicao.id = nextId();
  competicao.nome = nome;
  competicao.descricao = descricao ?? "";
  competicao.status = StatusCompeticao.ATIVO;
  if (adminId) {
    const adminUser = dataStore.usuarios.get(Number(adminId));
    if (adminUser) {
      competicao.admin = new AdministradorCompeticao();
    }
  }
  dataStore.competicoes.set(competicao.id, competicao);
  res.status(201).json({
    id: competicao.id,
    nome: competicao.nome,
    status: competicao.status
  });
});

router.post("/competicoes/:id/participantes", (req: Request, res: Response) => {
  const competicao = dataStore.competicoes.get(Number(req.params.id));
  if (!competicao) {
    return res.status(404).json({ message: "Competição não encontrada" });
  }
  const { usuarioId } = req.body;
  const usuario = dataStore.usuarios.get(Number(usuarioId));
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
