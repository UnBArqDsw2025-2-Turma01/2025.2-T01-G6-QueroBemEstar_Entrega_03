"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowUserNotification = void 0;
const Notification_1 = require("../product/Notification");
class FollowUserNotification extends Notification_1.Notification {
    deliver() { console.log("Deliver: follow user"); }
    dismiss() { console.log("Dismiss: follow user"); }
    log() { console.log("Log: follow user"); }
}
exports.FollowUserNotification = FollowUserNotification;
