import type { AdministradorCompeticao } from "./AdministradorCompeticao";
import type { CheckInCompeticao } from "./CheckInCompeticao";
import type { CodigoCompeticao } from "./CodigoCompeticao";
import type { RankingItem } from "./RankingItem";
import { StatusCompeticao } from "./StatusCompeticao";
import type { Usuario } from "./Usuario";

export class Competicao {
  id = 0;
  nome = "";
  descricao = "";
  dataInicio: Date | null = null;
  duracao = 0;
  limiteCheckIn = 0;
  status: StatusCompeticao = StatusCompeticao.ATIVO;
  codigoConvite: CodigoCompeticao | null = null;
  admin: AdministradorCompeticao | null = null;
  participantes: Usuario[] = [];
  checkIns: CheckInCompeticao[] = [];
  ranking: RankingItem[] = [];
  validacaoMinima = 0;

  verMembros(): Usuario[] {
    return [...this.participantes];
  }

  adicionarParticipante(usuario: Usuario): void {
    if (!this.participantes.includes(usuario)) {
      this.participantes.push(usuario);
    }
  }

  calcularRanking(): RankingItem[] {
    return [...this.ranking];
  }

  verFeedDeCheckIn(): CheckInCompeticao[] {
    return [...this.checkIns];
  }

  calcularMinCheckIn(): number {
    return this.validacaoMinima;
  }

  setStatus(status: StatusCompeticao | keyof typeof StatusCompeticao): void {
    this.status =
      typeof status === "string"
        ? StatusCompeticao[status as keyof typeof StatusCompeticao]
        : status;
  }
}
