import { AvaliacaoReceita, Competicao, Receita, Usuario } from "../domain";

export interface DataStore {
  usuarios: Map<number, Usuario>;
  receitas: Map<number, Receita>;
  competicoes: Map<number, Competicao>;
}

export const dataStore: DataStore = {
  usuarios: new Map(),
  receitas: new Map(),
  competicoes: new Map()
};

let idSequence = 1;

export const nextId = (): number => idSequence++;

export const toPublicUsuario = (usuario: Usuario) => ({
  id: usuario.id,
  nomeDeUsuario: usuario.nomeDeUsuario,
  nome: usuario.nome,
  sobrenome: usuario.sobrenome,
  email: usuario.email,
  bio: usuario.biografia,
  seguidores: usuario.seguidores.map(u => u.id ?? null).filter((id): id is number => typeof id === "number"),
  seguindo: usuario.seguindo.map(u => u.id ?? null).filter((id): id is number => typeof id === "number")
});

export const toPublicReceita = (receita: Receita) => ({
  id: receita.id,
  titulo: receita.titulo,
  descricao: receita.descricao,
  autor: receita.autor ? toPublicUsuario(receita.autor) : null,
  notaMedia: receita.calcularNotaMedia(),
  curtidas: receita.curtidas.length,
  comentarios: receita.comentarios.length,
  avaliacoes: receita.avaliacoes.length
});

const ana = new Usuario();
ana.id = nextId();
ana.cadastrar("ana.silva", "ana@example.com", "123456");
ana.nome = "Ana";
ana.sobrenome = "Silva";
dataStore.usuarios.set(ana.id, ana);

const bruno = new Usuario();
bruno.id = nextId();
bruno.cadastrar("bruno.sousa", "bruno@example.com", "123456");
bruno.nome = "Bruno";
bruno.sobrenome = "Sousa";
dataStore.usuarios.set(bruno.id, bruno);

const bolo = new Receita();
bolo.id = nextId();
bolo.titulo = "Bolo de Cenoura";
bolo.descricao = "Receita clássica com cobertura de chocolate.";
bolo.ingredientes = ["cenoura", "farinha", "ovos", "açúcar", "chocolate"];
bolo.modoPreparo = "Misture, asse a 180°C por 40 minutos e cubra com chocolate.";
bolo.autor = ana;
dataStore.receitas.set(bolo.id, bolo);
ana.receitasPostadas.push(bolo);

const smoothie = new Receita();
smoothie.id = nextId();
smoothie.titulo = "Smoothie Verde";
smoothie.descricao = "Suco detox rápido.";
smoothie.ingredientes = ["couve", "maçã", "gengibre", "limão"];
smoothie.modoPreparo = "Bata tudo no liquidificador com gelo.";
smoothie.autor = bruno;
dataStore.receitas.set(smoothie.id, smoothie);
bruno.receitasPostadas.push(smoothie);

const competicaoFit = new Competicao();
competicaoFit.id = nextId();
competicaoFit.nome = "Desafio Fit 30 Dias";
competicaoFit.descricao = "Compartilhe check-ins saudáveis durante 30 dias.";
competicaoFit.participantes.push(ana, bruno);
dataStore.competicoes.set(competicaoFit.id, competicaoFit);
