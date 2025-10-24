import { Notification } from "../product/Notification";

export class FollowUserNotification extends Notification {
  deliver(): void { console.log("Deliver: follow user"); }
  dismiss(): void { console.log("Dismiss: follow user"); }
  log(): void     { console.log("Log: follow user"); }
}

