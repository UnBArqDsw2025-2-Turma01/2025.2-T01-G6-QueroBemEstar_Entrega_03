// Enum de tipos de notificação (exemplo)
enum TipoNotificacao {
  NOVO_SEGUIDOR = "NOVO_SEGUIDOR",
  CURTIDA_RECEITA = "CURTIDA_RECEITA",
  COMENTARIO_RECEITA = "COMENTARIO_RECEITA",
  COMENTARIO_CHECKIN = "COMENTARIO_CHECKIN",
  ATUALIZACAO_RANKING = "ATUALIZACAO_RANKING",
}


class Notificacao {
  constructor(
    public tipo: TipoNotificacao,
    public mensagem: string,
    public destinatario: string,
    public dataEnvio: Date = new Date(),
    public lida: boolean = false
  ) {}

  marcarComoLida(): void {
    this.lida = true;
  }
}

// INTERFACE BASE: Notifier
// Define o contrato que todos os notificadores devem seguir.

interface Notifier {
  send(n: Notificacao): void;
}


// CLASSE CONCRETA: InAppNotifier
// Implementação padrão, envia uma notificação “in-app”.

class InAppNotifier implements Notifier {
  send(n: Notificacao): void {
    console.log(`📱 [In-App] Notificação para ${n.destinatario}: ${n.mensagem}`);
  }
}

// CLASSE ABSTRATA: NotifierDecorator 
abstract class NotifierDecorator implements Notifier {
  protected wrappee: Notifier;

  constructor(notifier: Notifier) {
    this.wrappee = notifier;
  }

  send(n: Notificacao): void {
    // delega para o objeto interno antes de adicionar o comportamento
    this.wrappee.send(n);
  }
}


//DECORADOR CONCRETO: EmailNotifier
class EmailNotifier extends NotifierDecorator {
  send(n: Notificacao): void {
    super.send(n); // envia via canal anterior (In-App, por exemplo)
    this.enviarEmail(n);
  }

  private enviarEmail(n: Notificacao): void {
    console.log(`[E-mail] Enviado para ${n.destinatario}: ${n.mensagem}`);
  }
}


// DECORADOR CONCRETO: PushNotifier
class PushNotifier extends NotifierDecorator {
  send(n: Notificacao): void {
    super.send(n); // envia via canais anteriores (In-App, Email, etc.)
    this.enviarPush(n);
  }

  private enviarPush(n: Notificacao): void {
    console.log(`[Push] Enviado para ${n.destinatario}: ${n.mensagem}`);
  }
}


// Simulação do uso real do padrão Decorator empilhando múltiplos canais de envio.

function main(): void {
  console.log("=== PADRÃO DECORATOR – SISTEMA DE NOTIFICAÇÕES ===");

  // --- 1. Cria o pipeline de notificadores ---
  // Podemos empilhar quantos quisermos:
  // In-App → Email → Push
  const notificadorComposto = new PushNotifier(
    new EmailNotifier(
      new InAppNotifier()
    )
  );

  // --- 2. Cria uma notificação de exemplo ---
  const notificacao = new Notificacao(
    TipoNotificacao.COMENTARIO_RECEITA,
    "Seu bolo de chocolate recebeu um novo comentário!",
    "ChefAna"
  );

  // --- 3. Envia a notificação via todos os canais ---
  notificadorComposto.send(notificacao);

  console.log("\nEnvio concluído com sucesso!");
}

// Executar a função principal
main();
