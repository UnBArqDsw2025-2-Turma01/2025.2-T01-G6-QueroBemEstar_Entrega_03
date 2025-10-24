"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckinCommentNotification = void 0;
const Notification_1 = require("../product/Notification");
class CheckinCommentNotification extends Notification_1.Notification {
    deliver() { console.log("Deliver: check-in comment"); }
    dismiss() { console.log("Dismiss: check-in comment"); }
    log() { console.log("Log: check-in comment"); }
}
exports.CheckinCommentNotification = CheckinCommentNotification;
