import { Notification } from "../product/Notification";

export class CompetitionRankingNotification extends Notification {
  deliver(): void { console.log("Deliver: competition ranking updated"); }
  dismiss(): void { console.log("Dismiss: competition ranking updated"); }
  log(): void     { console.log("Log: competition ranking updated"); }
}
