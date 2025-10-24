"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeLikeNotification = void 0;
const Notification_1 = require("../product/Notification");
class RecipeLikeNotification extends Notification_1.Notification {
    deliver() { console.log("Deliver: recipe like"); }
    dismiss() { console.log("Dismiss: recipe like"); }
    log() { console.log("Log: recipe like"); }
}
exports.RecipeLikeNotification = RecipeLikeNotification;
