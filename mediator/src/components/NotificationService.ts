interface NotificationItem {
  id: number;
  message: string;
}

export class NotificationService {
  private notifications: { [userId: string]: NotificationItem[] } = {};
  private nextId = 1;

  notify(userId: string, message: string) {
    if (!this.notifications[userId]) this.notifications[userId] = [];
    this.notifications[userId].push({ id: this.nextId++, message });
    console.log(`[NotificationService] Notificação para ${userId}: ${message}`);
  }

  // Retorna todas as notificações, sem limpar
  getNotificationsForUser(userId: string) {
    return this.notifications[userId] || [];
  }
}
