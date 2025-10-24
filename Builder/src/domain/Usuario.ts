import type { CheckInCompeticao } from "./CheckInCompeticao";
import type { Comentario } from "./Comentario";
import type { Competicao } from "./Competicao";
import type { Curtida } from "./Curtida";
import type { Receita } from "./Receita";
import { RecuperacaoSenhaToken } from "./RecuperacaoSenhaToken";
import type { ValidacaoCheckIn } from "./ValidacaoCheckIn";

export class Usuario {
  id = 0;
  seguidores: Usuario[] = [];
  seguindo: Usuario[] = [];
  receitasSalvas: Receita[] = [];
  receitasPostadas: Receita[] = [];
  nomeDeUsuario = "";
  nome = "";
  sobrenome = "";
  email = "";
  senha = "";
  fotoPerfilUrl: string | null = null;
  biografia: string | null = null;
  dataCadastro: Date = new Date();
  googleId: string | null = null;
  emailConfirmado = false;

  cadastrar(nomeDeUsuario: string, email: string, senha: string): void {
    this.nomeDeUsuario = nomeDeUsuario;
    this.email = email;
    this.senha = senha;
    this.dataCadastro = new Date();
  }

  login(email: string, senha: string): boolean {
    return this.email === email && this.senha === senha;
  }

  loginComGoogle(googleToken: string): boolean {
    this.googleId = googleToken;
    return true;
  }

  logout(): void {
  }

  solicitarRecuperacaoSenha(): RecuperacaoSenhaToken {
    const expiracao = new Date(Date.now() + 1000 * 60 * 60);
    return new RecuperacaoSenhaToken(Math.random().toString(36), expiracao, this);
  }

  confirmarEmail(_token: string): boolean {
    this.emailConfirmado = true;
    return true;
  }

  editarPerfil(): void {
  }

  seguirUsuario(usuarioAlvo: Usuario): void {
    if (!this.seguindo.includes(usuarioAlvo)) {
      this.seguindo.push(usuarioAlvo);
      usuarioAlvo.seguidores.push(this);
    }
  }

  deixarDeSeguirUsuario(usuarioAlvo: Usuario): void {
    this.seguindo = this.seguindo.filter(u => u !== usuarioAlvo);
    usuarioAlvo.seguidores = usuarioAlvo.seguidores.filter(u => u !== this);
  }

  visualizarListaSeguindo(): Usuario[] {
    return [...this.seguindo];
  }

  visualizarListaSeguidores(): Usuario[] {
    return [...this.seguidores];
  }

  verFeedReceitas(): Receita[] {
    return [...this.receitasPostadas];
  }

  publicarReceita(receitaAlvo: Receita): void {
    if (!this.receitasPostadas.includes(receitaAlvo)) {
      this.receitasPostadas.push(receitaAlvo);
    }
  }

  publicarrReceita(receitaAlvo: Receita): void {
    this.publicarReceita(receitaAlvo);
  }

  curtirReceita(receita: Receita, curtida: Curtida): void {
    if (!receita.curtidas.includes(curtida)) {
      receita.curtidas.push(curtida);
    }
  }

  comentarReceita(_receita: Receita, _texto: string): Comentario | null {
    return null;
  }

  salvarReceita(receita: Receita): void {
    if (!this.receitasSalvas.includes(receita)) {
      this.receitasSalvas.push(receita);
    }
  }

  criarCompeticao(_competicaoAlvo: Competicao): void {
  }

  entrarCompeticao(_competicaoAlvo: Competicao, _codigo: string): boolean {
    return true;
  }

  sairDaCompeticao(_competicao: Competicao): void {
  }

  validarCheckIn(_validacao: ValidacaoCheckIn): void {
  }

  postarCheckIn(_checkInAlvo: CheckInCompeticao): void {
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`.trim();
  }
}
