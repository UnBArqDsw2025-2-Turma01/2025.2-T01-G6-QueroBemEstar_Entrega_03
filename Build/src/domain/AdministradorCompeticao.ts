import { CodigoCompeticao } from "./CodigoCompeticao";
import type { Competicao } from "./Competicao";
import { StatusCompeticao } from "./StatusCompeticao";
import type { Usuario } from "./Usuario";

export class AdministradorCompeticao {
  editarCompeticao(_competicao: Competicao): void {
  }

  gerarCodigoCompeticao(competicao: Competicao): CodigoCompeticao {
    const randomCode = Math.random().toString(36).slice(2, 10).toUpperCase();
    const dias = 7;
    const codigo = new CodigoCompeticao(Date.now(), randomCode, dias, competicao);
    competicao.codigoConvite = codigo;
    return codigo;
  }

  finalizarCompeticao(competicao: Competicao): void {
    competicao.setStatus(StatusCompeticao.FINALIZADO);
  }

  inativarCompeticao(_competicao: Competicao): void {
  }

  realizarSorteioCompeticao(_usuario: Usuario, _competicao: Competicao): void {
  }
}
