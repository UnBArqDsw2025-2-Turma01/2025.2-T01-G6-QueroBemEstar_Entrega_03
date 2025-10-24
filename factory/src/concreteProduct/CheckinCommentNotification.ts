import { Notification } from "../product/Notification";

export class CheckinCommentNotification extends Notification {
  deliver(): void { console.log("Deliver: check-in comment"); }
  dismiss(): void { console.log("Dismiss: check-in comment"); }
  log(): void     { console.log("Log: check-in comment"); }
}
