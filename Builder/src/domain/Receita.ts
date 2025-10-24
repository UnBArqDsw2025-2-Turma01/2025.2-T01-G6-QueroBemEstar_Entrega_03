import type { AvaliacaoReceita } from "./AvaliacaoReceita";
import type { Comentario } from "./Comentario";
import type { Curtida } from "./Curtida";
import type { Usuario } from "./Usuario";

export class Receita {
  id: number | null = null;
  titulo: string | null = null;
  descricao: string | null = null;
  ingredientes: string[] = [];
  modoPreparo: string | null = null;
  fotoUri: string | null = null;
  dataPublicacao: Date | null = null;
  autor: Usuario | null = null;
  comentarios: Comentario[] = [];
  curtidas: Curtida[] = [];
  avaliacoes: AvaliacaoReceita[] = [];

  calcularNotaMedia(): number {
    if (!this.avaliacoes.length) {
      return 0;
    }
    const soma = this.avaliacoes
      .map(avaliacao => avaliacao.getNota())
      .reduce((acc, nota) => acc + nota, 0);
    return soma / this.avaliacoes.length;
  }

  toString(): string {
    const autorNome = this.autor ? this.autor.getNomeCompleto?.() ?? "N/A" : "N/A";
    return `Receita [titulo=${this.titulo ?? ""}, autor=${autorNome}]`;
  }
}
