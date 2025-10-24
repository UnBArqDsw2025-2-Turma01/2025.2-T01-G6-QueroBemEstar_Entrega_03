import type { Notification } from "../product/Notification";

export abstract class Notifier {
  protected notification!: Notification; // definido na factory

  // Factory Method
  abstract createNotification(code: string, type: string): Notification;

  sendNotification(): void {
    console.log(`Sending: ${this.notification.getCode()}`);
    this.notification.deliver();
    this.notification.log();
  }
}
