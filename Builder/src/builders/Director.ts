import { CompeticaoBuilder } from "./CompeticaoBuilder";
import type { Builder } from "./Builder";
import { ReceitaBuilder } from "./ReceitaBuilder";
import { UsuarioBuilder } from "./UsuarioBuilder";

export class Director {
  private builder: Builder<unknown> | null = null;

  setBuilder(builder: Builder<unknown>): void {
    this.builder = builder;
  }

  buildReceita(): void {
    if (!(this.builder instanceof ReceitaBuilder)) {
      throw new Error("Builder incorreto para construir Receita");
    }
    const builder = this.builder as ReceitaBuilder;
    builder.reset();
    builder
      .setTitulo("Receita Padrão (do Diretor)")
      .setIngredientes(["Ingrediente 1", "Ingrediente 2"])
      .setModoPreparo("Modo de preparo padrão.");
  }

  buildCompeticao(): void {
    if (!(this.builder instanceof CompeticaoBuilder)) {
      throw new Error("Builder incorreto para construir Competição");
    }
    const builder = this.builder as CompeticaoBuilder;
    builder.reset();
    builder
      .setNome("Competição Padrão (do Diretor)")
      .setDataInicio(new Date())
      .setDuracao(7)
      .setLimiteCheckIn(1);
  }

  buildUsuario(): void {
    if (!(this.builder instanceof UsuarioBuilder)) {
      throw new Error("Builder incorreto para construir Usuário");
    }
    const builder = this.builder as UsuarioBuilder;
    builder.reset();
    builder
      .setNomeDeUsuario("user_padrao")
      .setEmail("padrao@email.com")
      .setSenha("123456")
      .setDataCadastro(new Date());
  }

  buildTipo(): void {
  }
}
