import { Notification } from "../product/Notification";

export class RecipeCommentNotification extends Notification {
  deliver(): void { console.log("Deliver: recipe comment"); }
  dismiss(): void { console.log("Dismiss: recipe comment"); }
  log(): void     { console.log("Log: recipe comment"); }
}
