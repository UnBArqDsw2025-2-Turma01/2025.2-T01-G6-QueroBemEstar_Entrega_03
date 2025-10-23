"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
class NotificationService {
    constructor() {
        this.notifications = {};
        this.nextId = 1;
    }
    notify(userId, message) {
        if (!this.notifications[userId])
            this.notifications[userId] = [];
        this.notifications[userId].push({ id: this.nextId++, message });
        console.log(`[NotificationService] Notificação para ${userId}: ${message}`);
    }
    // Retorna todas as notificações, sem limpar
    getNotificationsForUser(userId) {
        return this.notifications[userId] || [];
    }
}
exports.NotificationService = NotificationService;
