"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notifier = void 0;
class Notifier {
    sendNotification() {
        console.log(`Sending: ${this.notification.getCode()}`);
        this.notification.deliver();
        this.notification.log();
    }
}
exports.Notifier = Notifier;
