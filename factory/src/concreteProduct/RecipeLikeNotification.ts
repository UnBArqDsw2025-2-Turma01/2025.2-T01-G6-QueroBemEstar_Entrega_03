import { Notification } from "../product/Notification";

export class RecipeLikeNotification extends Notification {
  deliver(): void { console.log("Deliver: recipe like"); }
  dismiss(): void { console.log("Dismiss: recipe like"); }
  log(): void     { console.log("Log: recipe like"); }
}
