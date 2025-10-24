"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompetitionRankingNotification = void 0;
const Notification_1 = require("../product/Notification");
class CompetitionRankingNotification extends Notification_1.Notification {
    deliver() { console.log("Deliver: competition ranking updated"); }
    dismiss() { console.log("Dismiss: competition ranking updated"); }
    log() { console.log("Log: competition ranking updated"); }
}
exports.CompetitionRankingNotification = CompetitionRankingNotification;
